import { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { Header } from '../../components/header/Header'
import { playerService } from '../../services/player/Player.service'
import { Loading } from '../../components/loading/Loading'
import { PlayerForm } from '../../components/player-form/Player-form'
import { Center } from '@chakra-ui/react'


export const PlayerOnlyReadProperties = () => {
  const [jugador, setJugadores] = useState(undefined)
  const [fueBuscado, setFueBuscado] = useState(false)
  const {id} = useParams()
  
  const player = async () =>{
    try{
      const jugadorFromService = await playerService.getPlayerById(id)
      setJugadores(jugadorFromService)
    }catch(e){
      console.log(e)
    }finally{
      setFueBuscado(true)
    }
  }
  useEffect(()=>{
    player()
  },[])

  return (
    <div className = 'main'>
      <Header text="Propiedades"></Header>
      <Center>
          {fueBuscado ? 
            jugador ? 
                <PlayerForm jugadorToShow={jugador}></PlayerForm>
              : 
                <Text align="center" as="b">Ocurrio un error, inténtelo más tarde.</Text>
            :<Loading></Loading>
          }
      </Center>
    </div>
  )
}