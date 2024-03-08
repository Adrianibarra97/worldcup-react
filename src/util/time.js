import { parseISO } from 'date-fns'

//"Castea" el date a yyyy-MM-dd
export function castDate(date) {
	const fechaFormateada = date.toISOString().split("T")[0]
	return fechaFormateada
}

//Instancia Date con libreria para luego acceder con metodos
export function calcularDate(fecha){
	const formateo = parseISO(fecha)
	return new Date(formateo)
}
