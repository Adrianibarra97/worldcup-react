import {useEffect, useState}from 'react'
import { Header } from '../../components/header/Header'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { ButtonDefault } from '../../components/button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { PlayerForm } from '../../components/player-form/Player-form'
import { Loading } from '../../components/loading/Loading'
import { playerService } from '../../services/player/Player.service'
import { Center } from '@chakra-ui/react'



export const PlayerProperties = () => {
  const [jugador,setJugador] = useState(undefined)
  const [fueBuscado,setFueBuscado] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const getJugador = async () =>{
    try{
      const jugadorFromService = await playerService.getPlayerById(id)
      setJugador(jugadorFromService)
    }catch(e){
      console.log(e)
    }finally{
      setFueBuscado(true)
    }
  }
  const actualizarJugador = async (jugador) =>{
    await playerService.update(jugador)
    navigate("/players")
  }
  useEffect(()=>{
    getJugador()
  },[])
  
  return (
    <div className = 'main'>
      <Header text="Propiedades"></Header>
      <Center >
          {fueBuscado 
            ? 
            jugador != undefined ? 
            
              <PlayerForm jugadorToShow={jugador} guardar={actualizarJugador} editable={true}></PlayerForm>
            :
              <Box display="flex" flexDirection="column" gap="30px" justifyContent="space-between" height="100%">
                <Text align="center" as="b">Ocurrio un error, inténtelo más tarde.</Text>
                <Box display="flex" justifyContent="center">
                  <ButtonDefault redirect="/jugadores" backgroundColor="var(--footerColor)" text="Volver"></ButtonDefault>
                </Box>
              </Box>
            : <Loading/>
          }
      </Center>
    </div>
  )
}