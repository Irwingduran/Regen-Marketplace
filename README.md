# Regen-Marketplace

## Data Structure for OnChain data

Vendedores : [ {
	idVendedor (“VendedorID”)
	logo (“ImageURI”) // Link a la imagen de logo (offchain)
	nombreEmpresa (“NombreEmpresa”)
	RFC (“VEMJ9402047YB”)
	RegenScore (uint8 0-100)
	OwnerAddress (“0x0000000BDF”),
	Productos: [ {
		productId (“product_id7”)
		productImage (“ImageURI”) // Link a la imagen de producto
		descripcionTecnica (“Filtro Aire”)
		descripción (“descriptionURI”) // Link a la archivo descripción (offchain)
		ClientScore (uint8 0-100)
		precio (uint24 0-8000000)
	}, … ]
	Marcas:  [ {
		nombreMark (“Carbono”)
		imagen (“ImageURI”) // Link a la imagen de regen mark (off chain)
		score (uint8 0-100)
	},  … ]
}, ... ]
