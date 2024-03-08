import { Player } from "./Player"

const MULTIPLICADOR_NIVEL_IMPRESION = 0.85
const VALORACION_PISO = 100.0
const MULTIPLICADOR_ON_FIRE = 1.2
const MULTIPLICADOR_NUMERO_PARIDAD = 1.1
const NivelImpresion = {
	BAJA: 1.0,
	MEDIA: MULTIPLICADOR_NIVEL_IMPRESION,
	ALTA: MULTIPLICADOR_NIVEL_IMPRESION,
}

export class Figurine {
	constructor(figurita) {
		this.id = figurita.id
		this.numero = figurita.numero
		this.nivelImpresion = figurita.nivelImpresion
		this.onFire = figurita.onFire
		this.url = figurita.url
		this.jugador = new Player(figurita.jugador)
	}

	toJSON() {
		return {
			id: this.id,
			numero: this.numero,
			nivelImpresion: this.nivelImpresion,
			onFire: this.onFire,
			url: this.url,
			jugador: this.jugador.toJSON(),
		}
	}
}

function valoracionBase(obj) {
	return (
		VALORACION_PISO *
		valoracionPorOnFire(obj.onFire) *
		valoracionPorSerNumeroPar(obj.numero) *
		valoracionPorNivelImpresion(obj.nivelImpresion)
	)
}

function valoracionPorOnFire(boolean) {
	return boolean ? MULTIPLICADOR_ON_FIRE : 1.0
}

function valoracionPorSerNumeroPar(numero) {
	return numero % 2 == 0 ? MULTIPLICADOR_NUMERO_PARIDAD : 1.0
}

function valoracionPorNivelImpresion(nivelImpresion) {
	return NivelImpresion[nivelImpresion] ? NivelImpresion[nivelImpresion] : 1.0
}

export { valoracionBase }
