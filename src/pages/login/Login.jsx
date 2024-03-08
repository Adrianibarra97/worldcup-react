import { LoginForm } from '../../components/login-components/login-form/LoginForm'
import { Box } from '@chakra-ui/react'

export const Login = () => {

  return (
    <div className = 'main'>
      <Box
        display = {'flex'}
        height = {'90vh'}
        backgroundColor = {'var(--backgroundLoginColor)'}
        alignItems = {'center'}
        justifyContent = {'center'}
      >
        <LoginForm />
      </Box>
    </div>
  )
}