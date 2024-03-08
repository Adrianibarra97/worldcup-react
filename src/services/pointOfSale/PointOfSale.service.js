import { PointOfSale } from "../../domain/PointOfSale"
import { pointOfSalesStub } from "./pointOfSale.stub.service"
import axios from "axios"
import { URL_BE } from "../configuration"
class PointOfSaleService {

  pointOfSales = pointOfSalesStub

	async getPointOfSales() {
		const pointOfSalesJSON = await axios.get(URL_BE + "/puntosDeVentas")
		const pointOfSales = pointOfSalesJSON.data.map((pointOfSale) => new PointOfSale(pointOfSale))
		return pointOfSales
	}
	
	async getPointOfSaleByTitle(title) {
		const pointOfSaleByTitleJSON = await axios.get(URL_BE + "/puntosDeVentas/filterByName/" + title)
		const pointOfSalesByTitle = pointOfSaleByTitleJSON.data.map((pointOfSale) => new PointOfSale(pointOfSale))
		return 	pointOfSalesByTitle
	}

	async searchPointOfSale(searchText) {
		if (searchText == '') return this.getPointOfSales()
		return this.getPointOfSaleByTitle(searchText)
	}

	async getPointOfSaleById(id) {
		const pointOfSaleByIdJSON = await axios.get(URL_BE + "/puntosDeVentas/" + id)
		const pointOfSaleById = new PointOfSale(pointOfSaleByIdJSON.data)
		return pointOfSaleById	
	}

	async deletePointOfSaleById(id) {
		await axios.delete(URL_BE + "/puntoDeVenta/" + id)
	}

	async update(pointOfSaleJson) {
		await axios.put(URL_BE + "/updatePuntoDeVenta/", pointOfSaleJson)
		return '/point-of-sales'
	}

	async create(pointOfSaleJson) { 
		await axios.post(URL_BE + "/createPuntoDeVenta/", pointOfSaleJson)
		return '/point-of-sales'
	}
}

class PointOfSaleServiceStub {

	getPointOfSales() {
		return this.pointOfSales
	}

    getPointOfSaleById(id) {
		return this.pointOfSales[id - 1]
	}

	searchPointOfSale(searchText) {

		if (searchText == ""){
			return this.getPointOfSales()
		}
		
		return this.getPointOfSaleById(1)
	}

}

export const pointOfSaleService = new PointOfSaleService()
export const pointOfSaleServiceStub = new PointOfSaleServiceStub()