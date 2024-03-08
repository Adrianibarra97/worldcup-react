export class LocationPointOfSale {
	constructor(domicilioPuntoDeVenta) {
		this.ubicacionGeograficaX = domicilioPuntoDeVenta.ubicacionGeograficaX
        this.ubicacionGeograficaY = domicilioPuntoDeVenta.ubicacionGeograficaY
        this.calle = domicilioPuntoDeVenta.calle
        this.altura = domicilioPuntoDeVenta.altura
        this.localidad = domicilioPuntoDeVenta.localidad
        this.provincia = domicilioPuntoDeVenta.provincia
    }

    toJSON(){
		return {
			ubicacionGeograficaX: this.ubicacionGeograficaX,
			ubicacionGeograficaY: this.ubicacionGeograficaY,
			calle: this.calle,
			altura: this.altura,
            localidad: this.localidad,
            provincia: this.provincia
		}
	}
}