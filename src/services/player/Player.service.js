import axios from "axios"
import { URL_BE } from "../configuration"
import { playersStub } from "./player.stub"
import { Player } from "../../domain/Player"
import { NationalTeam } from "../../domain/NationalTeam"

class PlayerService {
	players = playersStub

    async getPlayers() {
		const playersJSON = await axios.get(URL_BE + "/jugadores")
		return playersJSON["data"].map((p) => {
			const player = new Player(p)
			return player
		})
	}

	async getSelecciones() {
		const seleccionJSON = await axios.get(URL_BE + "/selecciones");
		return seleccionJSON["data"].map((s) => {
			const seleccion = new NationalTeam(s)
			return seleccion
		})
	} 

	async getByPlayersTitle(title) {
		const promesas = await axios.get(
			URL_BE + "/jugadores/filterByName/" + title
		)
		return promesas["data"].map((p) => {
			const jugador = new Player(p)
			return jugador
		})
	}
	async getPlayerById(id) {
		const playersJson = await axios.get(URL_BE + "/jugadores/" + id)
		const jugador = new Player(playersJson["data"])
		return jugador
	}
	async postPlayer(jugadorJSON) {
		const rtaFormBE = await axios.post(
			URL_BE + "/nuevoJugador",
			jugadorJSON
		)
		return rtaFormBE
	}
	async update(playersJson) {
		await axios.put(URL_BE + "/updateJugador", playersJson)
	}
	async deletePlayerById(id) {
		await axios.delete(URL_BE + "/jugadores/" + id)
	}

	//Metodos Stub
	async getPlayersStub() {
		return this.players
	}
	async getPlayerByIdStub(id) {
		return this.players[id - 1]
	}
	async deletePlayerByIdStub(id) {
		await axios.delete(URL_BE + "/jugadores/" + id)
	}
}
export const playerService = new PlayerService()
