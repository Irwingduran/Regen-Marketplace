# Marketplace Payment & Fee Splitting

## Key Requirements

### Fee Splitting
- **Marketplace Fee:** 20% of the product price is taken as a fee by the marketplace.
- **Crypto Conversion:** The fee is swapped into cryptocurrency using sponsored gas (assumed to be handled externally or via an oracle/swap service).
- **SAFE Wallet:** The 20% fee is sent to the marketplace's SAFE wallet.

### Payment Handling
- **Fiat Payment:** 80% of the payment is sent in fiat directly to the seller.
- **Crypto Payment Alternative:** 100% of the payment is converted to crypto, then split:
  - 20% to the marketplace.
  - 80% to a multisig wallet controlled by the NFT.

### SAFE Multisig
- The SAFE wallet has three signers:
  - **Client**
  - **Provider**
  - **Marketplace**
- Requires **2 out of 3** signatures to approve transactions.

### Escrow Service
- The marketplace acts as an **escrow** to protect both parties.
- A process tracks the stages of:
  1. Buying
  2. Shipping
  3. Receiving
  4. Approving

### Notifications
- Notifications are required to follow the transaction lifecycle.
- Out of scope for Solidity but can be implemented **off-chain**.

### SubDAOs
- Streaming excess income to subDAOs is **out of scope** for this implementation.