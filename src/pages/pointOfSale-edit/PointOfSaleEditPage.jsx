import { FormPointOfSales } from '../../components/form-point-of-sales/FormPointOfSales'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { pointOfSaleService } from '../../services/pointOfSale/PointOfSale.service'
import { Loading } from '../../components/loading/Loading'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, useToast } from '@chakra-ui/react'
import { Header } from '../../components/header/Header'

export const PointOfSaleEditPage = () => {
  
  const [puntoDeVenta, setPuntoDeVenta] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()
  
  const {id} = useParams()

  const getPointOfSaleById = async () => {
    setIsLoading(true)
      pointOfSaleService.getPointOfSaleById(id)
        .then(data => {
          setPuntoDeVenta(data)
        }).catch(error => {
          console.log(error)
          setPuntoDeVenta([])
        }).finally(() => {
          setIsLoading(false)
        })
  }
    useEffect(() => {
      getPointOfSaleById()
  },[id])

  const actualizarPuntoDeVenta = async (puntoDeVentaNuevo) => {
    setIsLoading(true)
    await pointOfSaleService.update(puntoDeVentaNuevo)
     .then(route => {
      navigate(route)
     }).catch(() => {
      toast({
				description: "Hubo un error al crear el punto de venta",
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
			navigate('/point-of-sales')
     }).finally(() => {
      setIsLoading(false)
    })
  }
    
  return (
    <div className = 'main'>
      <Header text = "Nuevo Punto de venta"></Header>
      {
        isLoading 
          ? <Loading />
          : Object.keys(puntoDeVenta).length > 0
            ? 
                <FormPointOfSales
                  puntoDeVenta = {puntoDeVenta}
                  guardar = {(puntoDeVentaNuevo) => actualizarPuntoDeVenta(puntoDeVentaNuevo)}
                  editable = {true}
                ></FormPointOfSales>
              
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
                >No se encontró la carta a modificar</Box>
      }
    </div>
  )
}
