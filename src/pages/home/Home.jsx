import { useEffect, useState } from 'react'

import { userService } from '../../services/user-service/User.service'
import { handlerError } from '../../util/handle-error/HandlerError'
import { Error } from '../../domain/Error'

import { Header } from '../../components/header/Header'
import { UserStatusCard } from '../../components/user-status-card/UserStatusCard'
import { SpinnerLoading } from '../../components/spinner-loading/SpinnerLoading'
import { ErrorModal } from '../../components/error-modal/ErrorModal'
import { Box } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'

export const Home = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [errorContent, setErrorContent] = useState(new Error('', ''))
  const [spinnerActive, setSpinnerActive] = useState(false)
  const [statusCards, setStatusCards] = useState([])

  const getStatus = async () => {
    setSpinnerActive(true)

    userService.getStatus()
      .then(data => {
        setStatusCards(data)
      }).catch(error => {
        handlerError(error, setErrorContent, onOpen)
      }).finally(() => {
        setSpinnerActive(false)
      })
  }

  useEffect(() => {
    getStatus()
  }, [])

  return (
    <div className = 'main'>
      <Header text = 'Home' />
      <Box
        display = { spinnerActive ? 'flex' : 'none'}
        width = {'100%'}
        height = {'80vh'}
        justifyContent = {'center'}
        alignItems = {'center'}
      >
        <SpinnerLoading spinnerActive = { spinnerActive }/>
      </Box>
      <Box
        display = { !spinnerActive ? 'flex' : 'none'}
        flexDirection = {'column'}
        width = {'100%'}
        minHeight = {'80vh'}
        backgroundColor = {'var(--backgroundColor)'}
        justifyContent = {'center'}
        alignItems = {'center'}
      >
        {
          statusCards.map(statusCard => 
            <UserStatusCard key = { statusCard.name } statusCard = { statusCard } />
          )
        }
      </Box>
      <ErrorModal error = { errorContent } isOpen = { isOpen } onClose = { onClose }/>
    </div>
  )
}