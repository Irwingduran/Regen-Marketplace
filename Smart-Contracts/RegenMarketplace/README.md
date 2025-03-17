# OnChain Data Structure

This document outlines the data structure used for storing on-chain information related to sellers, their products, and associated brands.

## Sellers

The `Sellers` array contains objects representing individual sellers. Each seller object has the following structure:

```json
{
  "idVendedor": "VendedorID", // Unique identifier for the seller
  "logo": "ImageURI", // Link to the seller's logo image (off-chain)
  "nombreEmpresa": "NombreEmpresa", // Name of the company
  "RFC": "VEMJ9402047YB", // Tax Identification Number (RFC)
  "RegenScore": 75, // RegenScore, an integer between 0 and 100
  "OwnerAddress": "0x0000000BDF", // Ethereum address of the seller
  "Productos": [ // Array of products offered by the seller
    {
      "productId": "product_id7", // Unique identifier for the product
      "productImage": "ImageURI", // Link to the product image (off-chain)
      "descripcionTecnica": "Filtro Aire", // Technical description of the product
      "descripción": "descriptionURI", // Link to the product description file (off-chain)
      "ClientScore": 85, // ClientScore, an integer between 0 and 100
      "precio": 1200000 // Price of the product, an integer between 0 and 8,000,000
    },
    ...
  ],
  "Marcas": [ // Array of brands associated with the seller
    {
      "nombreMark": "Carbono", // Name of the brand
      "imagen": "ImageURI", // Link to the brand image (off-chain)
      "score": 90 // Brand score, an integer between 0 and 100
    },
    ...
  ]
}
