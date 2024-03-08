import axios from "axios"
import { URL_BE } from "../configuration"
import { Figurine } from "../../domain/Figurine"
import { figurinesStub } from "./Figurine.stub"
import { Player } from "../../domain/Player"
class FigurineService {
	figurines = figurinesStub
	async getFigurines() {
		const promesas = await axios.get(URL_BE + "/figuritas")
		return promesas["data"].map((f) => {
			const figurita = new Figurine(f)
			return figurita
		})
	}
	async getFigurinesByTitle(title) {
		const promesas = await axios.get(
			URL_BE + "/figuritas/filterByName/" + title
		)
		return promesas["data"].map((f) => {
			const figurita = new Figurine(f)
			return figurita
		})
	}
	async getFigurineById(id) {
		const figurinesJson = await axios.get(URL_BE + "/figuritasProperties/" + id)
		const figurita = new Figurine(figurinesJson["data"])
		return figurita
	}
	async postFigurine(figuritaJSON) {
		const rtaFormBE = await axios.post(
			URL_BE + "/nuevaFigurita",
			figuritaJSON
		)
		return rtaFormBE
	}
	async update(figurinesJson) {
		await axios.put(URL_BE + "/updateFigurita", figurinesJson)
	}
	async deleteFigurineById(id) {
		await axios.delete(URL_BE + "/figuritas/" + id)
	}
	async getPlayers() {
		const playersJSON = await axios.get(URL_BE + "/jugadores")
		return playersJSON["data"].map((p) => {
			const player = new Player(p)
			return player
		})
	}
	//Metodos Stub
	async getFigurinesStub() {
		return this.figurines
	}
	async getFigurineByIdStub(id) {
		return this.figurines[id - 1]
	}
	async deleteFigurineByIdStub(id) {
		await axios.delete(URL_BE + "/figuritas/" + id)
	}
}
export const figurineService = new FigurineService()
