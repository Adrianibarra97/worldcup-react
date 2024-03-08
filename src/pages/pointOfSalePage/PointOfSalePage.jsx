import { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { Box } from '@chakra-ui/layout'
import { Searchbar } from '../../components/searchbar/Searchbar'
import { ButtonAddElement } from '../../components/button-add-element/Button-add-element'
import { PointOfSale } from '../../components/point-of-sales/PointOfSale'
import { pointOfSaleService } from '../../services/pointOfSale/PointOfSale.service'
import { Loading } from '../../components/loading/Loading'
import { AlertMessage } from '../../components/alert-message/Alert-Message'
import { useDisclosure, useToast } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export const PointOfSalePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [puntosDeVenta, setPuntosDeVenta] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [ idDeletePressed, setIdDeletePressed] = useState()
  const navigate = useNavigate()
  const toast = useToast()
 
  const createNewPointOfSale = () => {
    navigate("/create-point-of-sales/")
  }

  const searchPointOfSale = async () => {
    setIsLoading(true)
    pointOfSaleService.searchPointOfSale(searchText)
      .then(data => {
        setPuntosDeVenta(data)
    
      }).catch((error) => {
        console.log(error)
        setPuntosDeVenta([])
      }).finally(() => {
        setIsLoading(false)
      }) 
  }

  useEffect(() => {
    searchPointOfSale()
  }, [searchText])

  const deletePointOfSale = async () => {
    
    try{
      await pointOfSaleService.deletePointOfSaleById(idDeletePressed)
      toast({
        description: "Punto de venta eliminado con éxito",
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
    catch{
      toast({
        description: "Hubo un error al eliminar el punto de venta, inténtelo más tarde",
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
      searchPointOfSale()
      onClose()
    }
  }

  return (
    <div className = 'main'>
      <Header text = "Puntos de venta"></Header>
      <Box backgroundColor = "var(--backgroundColor)" p = {5}>
        <Box backgroundColor = "var(--backgroundColor)" p = {5} display = 'flex' justifyContent = 'center'>
          <Searchbar search = {(textoBusqueda) => {setSearchText(textoBusqueda)}} />
        </Box>
        <Box mt = {2} pt = {2} display = "flex" flexDirection = "column" justifyContent = "space-around" gap = {10}>
          {
            isLoading 
              ? <Loading />
              : puntosDeVenta.length > 0
                ?
                puntosDeVenta.map(punto => {
                  return <PointOfSale key={punto.id} puntoDeVenta={punto} setIdDeletePressed = {setIdDeletePressed} ventanaMensaje = {onOpen}></PointOfSale>
                })
                : <Box
                    display = {'flex'}
                    width = {'90%'}
                    height = {'100px'}
                    margin = {'50% 5%'}
                    fontSize = {'1.2em'}
                    fontWeight = {'bolder'}
                    backgroundColor = {'white'}
                    borderRadius = {'1em'}
                    border = {'1px solid grey'}
                    boxShadow = {'2px 2px 5px grey'}
                    justifyContent = {'center'}
                    alignItems = {'center'}
                  >No se encontraron cartas</Box>
          }
          <AlertMessage
            isOpen = {isOpen}
            onClose = {onClose}
            objetoAEliminar = "Punto De Venta"
            deleteFunction = {deletePointOfSale}
          ></AlertMessage>
        </Box>
      </Box>
      <Box onClick = {createNewPointOfSale}>
        <ButtonAddElement />
      </Box>
    </div>
  )
}