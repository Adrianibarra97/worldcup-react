import { Player } from "../../domain/Player"

const playersStub = [
	new Player({
		nombre: "Lionel",
		apellido: "Messi",
		nacimiento: "11-11-1900",
		camiseta: 10,
		seleccion: {
			pais: "Argentina",
			confederacion: "CONMEBOL",
			worldCups: 3,
		},
		debut: 2005,
		altura: 1.87,
		peso: 80,
		posicion: {
			base: 1000,
			valuation: 9000,
		},
		precio: 1500000,
		esLider: true,
	}),
	new Player({
		nombre: "Nicolas",
		apellido: "Otamendi",
		nacimiento: "11-11-1900",
		camiseta: 18,
		seleccion: {
			pais: "Argentina",
			confederacion: "CONMEBOL",
			worldCups: 3,
		},
		debut: 2009,
		altura: 1.95,
		peso: 87,
		posicion: {
			base: 1000,
			valuation: 5000,
		},
		precio: 150000,
		esLider: false,
	}),
]

export { playersStub }
