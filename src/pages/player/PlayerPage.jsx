import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { Header } from "../../components/header/Header";
import { ButtonAddElement } from "../../components/button-add-element/Button-add-element";
import { Players } from "../../components/player/Players";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { playerService } from "../../services/player/Player.service";
import { Loading } from "../../components/loading/Loading";
import { useDisclosure } from "@chakra-ui/react";
import { AlertMessage } from "../../components/alert-message/Alert-Message";
import { Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export const PlayerPage = () => {
  const [jugadores, setJugadores] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ idDeletePressed, setIdDeletePressed] = useState(-1)
  const navigate = useNavigate()
  const toast = useToast()

  const updateIdPressedToDelete = (id) => {
    setIdDeletePressed(id)
  }

  const onlyReadAttributes = async (idJugador) => {
    navigate("/player-properties/" + idJugador)
  }

  const agregarJugador = (jugadorAAgregar) => {
    navigate("/create-player", jugadorAAgregar)
  };
  
  const editPlayer = (idJugador) => {
    navigate("/edit-player/" + idJugador)
  }

  const deletePlayer = async () => {
    try{
    await playerService.deletePlayerById(idDeletePressed)
    toast({
      description: "Jugador eliminado con éxito",
      duration: 2000,
      position: "top-right",
      icon:" ",
      containerStyle:{
        backgroundColor:"#4db34d",
        color:"white",
        maxHeight:"100px",
        maxWidth:"150px",
        padding:"20px",
        borderRadius:"10px",
        border:"solid 3px var(--primaryColor)",
      }
  })
  }
  catch(e){
    toast({
      description: "Hubo un error al eliminar el jugador, inténtelo más tarde",
      duration: 2000,
      position: "top-right",
      icon:" ",
      containerStyle:{
        backgroundColor:"#ff3333",
        color:"black",
        maxHeight:"100px",
        maxWidth:"150px",
        padding:"20px",
        borderRadius:"10px",
        border:"solid 3px var(--primaryColor)",
      }
  })
  }finally{
    onClose()
  }
  getJugadores()
  }
  

  const filtroBusqueda = async (textoABuscar) =>{
    if (textoABuscar == ""){
      getJugadores()
    } else{
      setIsLoading(true)
      const players = await playerService.getByPlayersTitle(textoABuscar)
      setJugadores(players)
      setIsLoading(false)
    }
  }
  const getJugadores = async () => {
    try {
      setIsLoading(true)
      const players = await playerService.getPlayers()
      setJugadores(players)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getJugadores()
  }, [])

  return (
    <div className="main" >
      <Header text="Jugadores"></Header>
      <Box backgroundColor="var(--backgroundColor)" p={5}>
        <Box
          backgroundColor="var(--backgroundColor)"
          p={5}
          display="flex"
          justifyContent="center"
          overflowY="auto"
        >
          <Searchbar search={filtroBusqueda}/>
        </Box>
        <Box
          mt={2}
          pt={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap={10}
          overflowY="auto"
        >
          {
            isLoading ? 
              <Loading />
             : 
              jugadores.length > 0 ? 
                jugadores.map((jugador) => {
                  return (
        <Players
          key={jugador.id}
          jugador={jugador}
          onlyRead={onlyReadAttributes}
          edit={editPlayer}
          ventanaMensaje={onOpen}
          setIdDeletePressed={updateIdPressedToDelete}>
        </Players>
                  );
                })
               : 
                <Text textAlign={[ 'center', 'center' ]}>No hay jugadores disponibles</Text>
              
          }
          <AlertMessage
            isOpen={isOpen}
            onClose={onClose}
            objetoAEliminar="Jugador"
            deleteFunction={deletePlayer}
          ></AlertMessage>
        </Box>
      </Box>
      <Box onClick={agregarJugador}>
        <ButtonAddElement />
      </Box>
    </div>
  )
}
