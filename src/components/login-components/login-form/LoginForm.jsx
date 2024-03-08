import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { User } from '../../../domain/user'
import { Error } from '../../../domain/Error'
import { handlerError } from '../../../util/handle-error/HandlerError'
import { authService } from '../../../services/auth-service/Auth.service'

import { UserInput } from '../user-input/UserInput'
import { PasswordInput } from '../password-input/PasswordInput'
import { SpinnerLoading } from '../../spinner-loading/SpinnerLoading'
import { ErrorModal } from '../../error-modal/ErrorModal'
import { Stack, Heading, Button, useDisclosure } from '@chakra-ui/react'

export const LoginForm = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [errorContent, setErrorContent] = useState(new Error('', ''))
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
  const [spinnerActive, setSpinnerActive] = useState(false)
	const navigate = useNavigate()
	
	const handleSubmit = (e) => {
		e.preventDefault()
		setSpinnerActive(true)

    const userLogin = User.loginJSON(username, password)

    authService.login(userLogin)
      .then(data => {
        navigate(data)
      }).catch(error => {
        handlerError(error, setErrorContent, onOpen)
      }).finally(() => {
        setSpinnerActive(false)
      })
	}

  return (
    <Stack
			as = {'form'}
			onSubmit = { (e) => handleSubmit(e) }
			display = {'flex'}
			alignItems = {'center'}
			justifyContent = {'center'}
		>
			<Heading
				mb = {'1em'}
				fontSize = {'3.5em'}
				fontWeight = {'bolder'}
				color = {'var(--footerColor)'}
				textShadow = {'5px 5px 5px grey'}
			>WorldCapp</Heading>
			<UserInput 
				usernameValue = { (e) => setUsername(e.target.value) }
			/>
			<PasswordInput
				passwordValue = { (e) => setPassword(e.target.value) }
			/>
			<Button
				type = 'submit'
				display = {'flex'}
				height = {'2.2em'}
				width = {'10em'}
				margin = {'1em'}
				fontSize = {'1.5em'}
				fontWeight = {'bold'}
				color = {'var(--backgroundLoginColor)'}
        backgroundColor = {'var(--primaryColor)'}
				border = {'2px solid var(--primaryColor)'}
				borderRadius = {'0.5em'}
				boxShadow = {'2px 3px 10px grey'}
				overflow = {'hidden'}
			>Ingresar</Button>
      <SpinnerLoading spinnerActive = { spinnerActive } />
			<ErrorModal error = { errorContent } isOpen = { isOpen } onClose = { onClose }/>
	</Stack>
  )
}