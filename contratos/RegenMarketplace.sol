// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract RegenMarketplace is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    struct Marca {
        string nombreMarca;
		string imagen; // Link a la imagen de regen mark (off chain)
		uint8 score;
    }

    struct Producto {
        string productId;
		string productImage; // Link a la imagen de producto
		string descripcionTecnica;
		string descripcion; // Link a la archivo descripción (offchain)
		uint8 ClientScore;
		uint24 precio;
    }

    struct Vendedores {
        string idVendedor;
        string logo; // Link a la imagen de logo (offchain)
        string nombreEmpresa;
        string RFC;
        uint24 RegenScore;
        address payable OwnerAddress;
        // When font connected the uint of mapping will change for a string to search faster (string = ProductId)
        // Same for Marcas
        mapping(uint8 => Producto) productos;
        mapping(uint8 => Marca) marcas;
        // Control indices
        uint8 productosCount;
        uint8 marcasCount;
    }

    mapping(string => Vendedores) vendedores;

    constructor(address initialOwner)
        ERC721("RegenMarketplace", "RMKP")
        Ownable(initialOwner)
    {}

    function safeMint(address to, string memory uri) public onlyOwner 
    returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Function to create a new Vendedor
    function createVendedor(
        string memory _idVendedor, 
        string memory _logo, 
        string memory _nombreEmpresa, 
        string memory _RFC, 
        uint24 _RegenScore, 
        address payable _OwnerAddress
    ) public onlyOwner {
        Vendedores storage newVendedor = vendedores[_idVendedor];
        newVendedor.idVendedor = _idVendedor;
        newVendedor.logo = _logo;
        newVendedor.nombreEmpresa = _nombreEmpresa;
        newVendedor.RFC = _RFC;
        newVendedor.RegenScore = _RegenScore;
        newVendedor.OwnerAddress = _OwnerAddress;
        newVendedor.productosCount = 0;
        newVendedor.marcasCount = 0;
    }

    // Function to add a Producto to a Vendedor
    function addProducto(
        string memory _idVendedor, 
        string memory _productId, 
        string memory _productImage, 
        string memory _descripcionTecnica, 
        string memory _descripcion, 
        uint8 _ClientScore, 
        uint24 _precio
    ) public onlyOwner {
        Vendedores storage existingVendedor = vendedores[_idVendedor];
        Producto memory newProducto = Producto({
            productId: _productId,
            productImage: _productImage,
            descripcionTecnica: _descripcionTecnica,
            descripcion: _descripcion,
            ClientScore: _ClientScore,
            precio: _precio
        });

        existingVendedor.productos[existingVendedor.productosCount] = newProducto;
        existingVendedor.productosCount++;
    }

    // Function to add a Marca to a Producto
    function addMarca(
        string memory _idVendedor,
        string memory _nombreMarca, 
        string memory _imagen, 
        uint8 _score
    ) public onlyOwner {
        Vendedores storage existingVendedor = vendedores[_idVendedor];
        Marca memory newMarca = Marca({
            nombreMarca: _nombreMarca,
            imagen: _imagen,
            score: _score
        });

        existingVendedor.marcas[existingVendedor.marcasCount] = newMarca;
        existingVendedor.marcasCount++;
    }

    function searchVendor(string memory _idVendedor) public view returns (
        string memory,
        string memory, // Link a la imagen de logo (offchain)
        string memory,
        string memory,
        uint24,
        address payable,
        string memory,
        uint8 score
    ) {
        Vendedores storage existingVendedor = vendedores[_idVendedor];
        return (
            existingVendedor.idVendedor,
            existingVendedor.logo, // Link a la imagen de logo (offchain)
            existingVendedor.nombreEmpresa,
            existingVendedor.RFC,
            existingVendedor.RegenScore,
            existingVendedor.OwnerAddress,
            existingVendedor.marcas[0].nombreMarca,
            existingVendedor.marcas[0].score
        );
    }
}
