import { Figurine } from "../../domain/Figurine"
const emptyFigurine = new Figurine({
	id: -1,
	numero: 0,
	nivelImpresion: "BAJA",
	onFire: false,
	url:"",
	jugador: {
		nombre: "",
		apellido: "",
		fechaNacimiento: null,
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
		isLeader: false,
	},
})
export { emptyFigurine }
