import { Figurine } from "../../domain/Figurine"

const figurinesStub = [
	new Figurine({
		id: 1,
		numero: 10,
		nivelImpresion: "Media",
		onFire: true,
		jugador: {
			id: 1,
			nombre: "Lionel",
			apellido: "Messi",
			fechaNacimiento: "1900-11-11",
			numeroCamiseta: 10,
			seleccion: {
				pais: "Argentina",
				nombreConfederacion: "CONMEBOL",
				copasDelMundo: 3,
			},
			anioDebut: 2005,
			altura: 1.87,
			peso: 80,
			posicion: "Delantero",
			valoracion: 7500,
			price: 1500000,
			isLeader: true,
		},
	}),
	new Figurine({
		id: 2,
		numero: 10,
		nivelImpresion: "Media",
		onFire: false,
		jugador: {
			id: 2,
			nombre: "Nicolas",
			apellido: "Otamendi",
			fechaNacimiento: "1900-11-10",
			numeroCamiseta: 18,
			seleccion: {
				pais: "Argentina",
				nombreConfederacion: "CONMEBOL",
				copasDelMundo: 3,
			},
			anioDebut: 2009,
			altura: 1.95,
			peso: 87,
			posicion: "Defensor",
			valoracion: 3000,
			price: 150000,
			isLeader: false,
		},
	}),
]

export { figurinesStub }
