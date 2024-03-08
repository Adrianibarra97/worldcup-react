import { Player } from "../../domain/Player"
const emptyPlayer = new Player({
		id: -1,
		nombre: "",
		apellido: "",
		fechaNacimiento:"2000-01-01",
		numeroCamiseta: 0,
		seleccion: {
			pais: "",
			nombreConfederacion: "",
			copasDelMundo: 0,
		},
		anioDebut: 0,
		altura: 0,
		peso: 0,
		posicion: "",
		valoracion: 0, 
		price: 0,
		esLider: false,
	},
)
export { emptyPlayer }
