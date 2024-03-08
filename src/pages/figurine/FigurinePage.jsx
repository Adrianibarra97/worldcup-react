import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@chakra-ui/layout"
import { Header } from "../../components/header/Header"
import { ButtonAddElement } from "../../components/button-add-element/Button-add-element"
import { Figurine } from "../../components/figurine/Figurine"
import { Searchbar } from "../../components/searchbar/Searchbar"
import { figurineService } from "../../services/figurine/Figurine.service"
import { Loading } from "../../components/loading/Loading"
import { useDisclosure, useToast } from "@chakra-ui/react"
import { AlertMessage } from "../../components/alert-message/Alert-Message"
import { Text } from "@chakra-ui/react"

export const FigurinePage = () => {
  const [figuritas, setFiguritas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ idDeletePressed, setIdDeletePressed] = useState(-1)
  const navigate = useNavigate()
  const toast = useToast()

  const updateIdPressedToDelete = (id) => {
    setIdDeletePressed(id)
  }

  const agregarFigurita = (figuritaAAgregar) => {
    navigate("/create-figurine", figuritaAAgregar)
  }
  
  const onlyReadAttributes = async (idFigurita) => {
    navigate("/figurine-properties/" + idFigurita)
  }

  const editFigurine = (idFigurita) => {
    navigate("/edit-figurine/" + idFigurita)
  }

  const deleteFigurine = async () => {
    try{
      await figurineService.deleteFigurineById(idDeletePressed)
      toast({
        description: "Figurita eliminada con éxito",
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
        description: "Hubo un error al eliminar la figurita, inténtelo más tarde",
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
    getFiguritas()
  }

  const filtroBusqueda = async (textoABuscar) =>{
    if (textoABuscar == ""){
      getFiguritas()
    } else{
      setIsLoading(true)
      const figurines = await figurineService.getFigurinesByTitle(textoABuscar)
      setFiguritas(figurines)
      setIsLoading(false)
    }
  }
  const getFiguritas = async () => {
    try {
      const figurines = await figurineService.getFigurines()
      setFiguritas(figurines)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getFiguritas()
  }, [])

  return (
    <div className="main">
      <Header text="Figuritas"></Header>
      <Box backgroundColor="var(--backgroundColor)" p={5}>
        <Box
          backgroundColor="var(--backgroundColor)"
          p={5}
          display="flex"
          justifyContent="center"
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
        >
          {
            isLoading ? 
              <Loading />
             : 
              figuritas.length > 0 ? 
                figuritas.map((figurita) => {
                  return (
                    <Figurine
                      key={figurita.id}
                      figurita={figurita}
                      onlyRead={onlyReadAttributes}
                      edit={editFigurine}
                      ventanaMensaje={onOpen}
                      setIdDeletePressed = {updateIdPressedToDelete}
                    ></Figurine>
                  )
                })
               : 
                <Text textAlign={[ 'center', 'center' ]} as="b">No hay figuritas disponibles</Text>
              
          }
          <AlertMessage
            isOpen={isOpen}
            onClose={onClose}
            objetoAEliminar={"Figurita"}
            deleteFunction={deleteFigurine}
          ></AlertMessage>
        </Box>
      </Box>
      <Box onClick={agregarFigurita}>
        <ButtonAddElement />
      </Box>
    </div>
  )
}
