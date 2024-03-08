import { LocationPointOfSale } from "./LocationPointOfSale"

export class PointOfSale {
	constructor(pointOfSale) {
		this.id = pointOfSale.id
		this.nombreComercial = pointOfSale.nombreComercial
        this.stockDeSobres = pointOfSale.stockDeSobres
		this.domicilioPuntoDeVenta = new LocationPointOfSale(pointOfSale.domicilioPuntoDeVenta)
		this.tipoPuntoDeVenta = pointOfSale.tipoPuntoDeVenta
		this.pedidosPendientesPuntoDeVenta = pointOfSale.pedidosPendientesPuntoDeVenta
    }

	toJSON(){
		return {
			id: this.id,
			nombreComercial: this.nombreComercial,
			stockDeSobres: this.stockDeSobres,
			domicilioPuntoDeVenta: this.domicilioPuntoDeVenta.toJSON(),
			tipoPuntoDeVenta: this.tipoPuntoDeVenta,
			pedidosPendientesPuntoDeVenta: this.pedidosPendientesPuntoDeVenta
		}
	}
}
