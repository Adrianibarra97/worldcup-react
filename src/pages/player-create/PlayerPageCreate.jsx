import { useState } from "react"
import { Box } from "@chakra-ui/layout"
import { Header } from "../../components/header/Header"
import { PlayerForm } from "../../components/player-form/Player-form"
import { emptyPlayer } from "../../services/player/Player-empty"
import { playerService } from "../../services/player/Player.service"
import { useNavigate } from "react-router-dom"
import { Center } from "@chakra-ui/react"
export const PlayerPageCreate = () => {
  const [jugador] = useState(emptyPlayer)
  const navigate = useNavigate()

  const publicarJugador = async (jugadorJSON) =>{
    await playerService.postPlayer(jugadorJSON)
    navigate("/players")
  }

  return (
    <div className="main">
      <Header text="Crear jugador"></Header>
      <Center>
        <PlayerForm jugadorToShow={jugador} guardar={publicarJugador} editable={true}></PlayerForm>
      </Center>
    </div>
  )
}