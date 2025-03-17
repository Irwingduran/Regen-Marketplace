// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol";

contract Marketplace {
    address public marketplaceWallet;
    uint256 public constant FEE_PERCENTAGE = 20; // 20%
    uint256 public constant ESCROW_THRESHOLD = 2; // 2 out of 3 signatures

    struct Escrow {
        address buyer;
        address seller;
        uint256 amount;
        bool isFiatPayment;
        bool isDelivered;
        bool isApprovedByBuyer;
        bool isApprovedBySeller;
        bool isReleased;
    }

    mapping(uint256 => Escrow) public escrows; // Escrow ID -> Escrow details
    mapping(uint256 => address[]) public escrowSigners; // Escrow ID -> Signers
    mapping(uint256 => mapping(address => bool)) public approvals; // Escrow ID -> Signer -> Approval status

    event EscrowCreated(uint256 escrowId, address buyer, address seller, uint256 amount);
    event EscrowReleased(uint256 escrowId, address recipient, uint256 amount);
    event EscrowApproved(uint256 escrowId, address signer);

    constructor(address _marketplaceWallet) {
        marketplaceWallet = _marketplaceWallet;
    }

    function createEscrow(
    uint256 escrowId,
    address seller,
    uint256 amount,
    bool isFiatPayment
) external payable {
    require(msg.value == amount, "Incorrect payment amount");
    require(escrows[escrowId].buyer == address(0), "Escrow already exists");

    // Calculate fee
    uint256 fee = (amount * FEE_PERCENTAGE) / 100;

    // Create escrow
    escrows[escrowId] = Escrow({
        buyer: msg.sender,
        seller: seller,
        amount: amount,
        isFiatPayment: isFiatPayment,
        isDelivered: false,
        isApprovedByBuyer: false,
        isApprovedBySeller: false,
        isReleased: false
    });

    // Add signers to the escrow
    escrowSigners[escrowId] = [msg.sender, seller, marketplaceWallet];

    // Transfer fee to marketplace wallet
    payable(marketplaceWallet).transfer(fee);

    emit EscrowCreated(escrowId, msg.sender, seller, amount);
}

    function approveEscrow(uint256 escrowId) external {
        Escrow storage escrow = escrows[escrowId];
        require(!escrow.isReleased, "Escrow already released");
        require(isSigner(escrowId, msg.sender), "Not a valid signer");

        approvals[escrowId][msg.sender] = true;
        emit EscrowApproved(escrowId, msg.sender);

        // Check if 2 out of 3 signers have approved
        uint256 approvalCount = 0;
        for (uint256 i = 0; i < escrowSigners[escrowId].length; i++) {
            if (approvals[escrowId][escrowSigners[escrowId][i]]) {
                approvalCount++;
            }
        }

        if (approvalCount >= ESCROW_THRESHOLD) {
            releaseEscrow(escrowId);
        }
    }

    function releaseEscrow(uint256 escrowId) private {
        Escrow storage escrow = escrows[escrowId];
        require(!escrow.isReleased, "Escrow already released");

        uint256 remainingAmount = escrow.amount - ((escrow.amount * FEE_PERCENTAGE) / 100);

        if (escrow.isFiatPayment) {
            // Handle fiat payment (off-chain logic)
            // For simplicity, assume fiat is handled externally
        } else {
            // Send remaining amount to seller
            payable(escrow.seller).transfer(remainingAmount);
        }

        escrow.isReleased = true;
        emit EscrowReleased(escrowId, escrow.seller, remainingAmount);
    }

    function isSigner(uint256 escrowId, address signer) private view returns (bool) {
        address[] memory signers = escrowSigners[escrowId];
        for (uint256 i = 0; i < signers.length; i++) {
            if (signers[i] == signer) {
                return true;
            }
        }
        return false;
    }
}
