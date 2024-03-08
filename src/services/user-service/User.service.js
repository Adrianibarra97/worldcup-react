import axios from 'axios'

import { URL_BE } from '../configuration'
import { Status } from '../../domain/Status'

class UserService {

	async getStatus() {
		const userStatusJSON = await axios.get(URL_BE + '/statusUsuario/' + localStorage.getItem('user_token'))
		const userStatus = userStatusJSON.data.map((status) => new Status(status))
		return userStatus
	}
}

class UserServiceStub {

	statusUserJSON = [
		{
			'name': 'figuritas ofrecidas',
			'amount': 13
		},
		{
			'name': 'figuritas faltantes',
			'amount': 9
		},
		{
			'name': 'puntos de venta',
			'amount': 20
		},
		{
			'name': 'usuarios activos',
			'amount': 10
		},
	]

	async getStatus() {
		if(this.statusUserJSON.length > 0) { 
			const statusUser = this.statusUserJSON.map((status) => new Status(status))
			return statusUser
		}
		throw 'Error: 404'
	}
}

export const userService = new UserService()
export const userServiceStub = new UserServiceStub()