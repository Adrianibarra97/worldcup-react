import { Error } from "../../domain/Error"

const FAILED_CONNECTION = 0

export const handlerError = (error, setErrorContent, onOpen) => {
  const status = error.request?.status
  const message = status == FAILED_CONNECTION 
		? 'Falló la conexión!'
		: error.response?.data.message
  const newError = new Error('Error Code: ' + status, message)
	setErrorContent(newError)
	onOpen()
}