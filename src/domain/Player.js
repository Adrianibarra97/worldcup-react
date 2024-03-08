import { NationalTeam } from "./NationalTeam"
import { castDate } from "../util/time"
import { calcularDate } from "../util/time"

export class Player {
	constructor(jugador) {
		this.id = jugador.id
		this.nombre = jugador.nombre
		this.apellido = jugador.apellido
		this.fechaNacimiento = calcularDate(jugador.fechaNacimiento)
		this.numeroCamiseta = jugador.numeroCamiseta
		this.seleccion = new NationalTeam(jugador.seleccion)
		this.anioDebut = jugador.anioDebut
		this.altura = jugador.altura
		this.peso = jugador.peso
		this.posicion = jugador.posicion
		this.valoracion = jugador.valoracion
		this.cotizacion = jugador.cotizacion
		this.esLider = jugador.esLider
	}

	toJSON() {
		return {
			id: this.id,
			nombre: this.nombre,
			apellido: this.apellido,
			fechaNacimiento: castDate(this.fechaNacimiento),
			numeroCamiseta: this.numeroCamiseta,
			seleccion: this.seleccion.toJSON(),
			anioDebut: this.anioDebut,
			altura: this.altura,
			peso: this.peso,
			posicion: this.posicion,
			valoracion: this.valoracion,
			cotizacion: this.cotizacion,
			esLider: this.esLider,
		}
	}
}
