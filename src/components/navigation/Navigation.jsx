import { Link, useNavigate } from "react-router-dom"

import { authService } from "../../services/auth-service/Auth.service"

export const Navigation = () => {

	const navigate = useNavigate()

	const logoutApp = () => {
		authService.logout()
		navigate('/auth/login')
	}
    
	return (
		<nav className = "navigation">
			<Link
				className = "navigation__item"
				to = '/home'
			>
				<i className = "fa-solid fa-house-chimney"></i>
			</Link>
			<Link 
				className = "navigation__item"
				to = '/figurines'
			>
				<i className = "fa-solid fa-clipboard-user"></i>
			</Link>
			<Link
				className = "navigation__item"
				to = '/players'
			>
				<i className = "fa-solid fa-person-running"></i>
			</Link>
			<Link
				className = "navigation__item"
				to = '/point-of-sales'
			>
				<i className = "fa-solid fa-store"></i>
			</Link>
			<button
				className = "navigation__item"
				onClick = { () => logoutApp() }
			>
				<i className = "fa-solid fa-right-from-bracket"></i>
			</button>
		</nav>
	)
}