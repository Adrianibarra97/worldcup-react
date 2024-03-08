import axios from 'axios'
import { URL_BE } from '../configuration'

class AuthService {

	async login(loginJSON) {
		const userId = await axios.post(URL_BE + '/loginUsuario', loginJSON)
		localStorage.setItem('user_token', userId.data)
    return '/home'
	}

	logout() {
		localStorage.removeItem('user_token')
	}

	isAuthorice() {
		return localStorage.getItem('user_token') != undefined
	}
}

class AuthServiceStub {

  localStorage = undefined

	async login(loginJSON) {
		if(loginJSON.username == 'admin' && loginJSON.password == '1111') {
			this.localStorage = '1'
			return '/home'
		}
		throw 'El usuario y/o la contraseña, no corresponden!'
	}

	logout() {
		this.localStorage = undefined
	}

	isAuthorice() {
		return this.localStorage != undefined
	}
}

export const authService = new AuthService()
export const authServiceStub = new AuthServiceStub()