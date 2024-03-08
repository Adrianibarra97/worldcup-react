import { Header } from '../../components/header/Header'
import { Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/loading/Loading'
import { pointOfSaleService } from '../../services/pointOfSale/PointOfSale.service'
import { useEffect } from 'react'
import { FormPointOfSales } from '../../components/form-point-of-sales/FormPointOfSales'

export const PointOfSaleDetailPage = () => {
  
    const [puntoDeVenta, setPuntoDeVenta] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    const getPointOfSaleById = () => {
      setIsLoading(true)
        pointOfSaleService.getPointOfSaleById(id)
          .then(data => {
            setPuntoDeVenta(data)
          }).catch(e => {
            console.log(e)
          }).finally(() => {
            setIsLoading(false)
          })
    }

    useEffect(() => {
      getPointOfSaleById()
    },[id])

  return (
    <div className = 'main'>
        <Header text = "Detalle punto de venta"></Header>
        <Center >
        { isLoading ? 
              <Loading />
             :
            puntoDeVenta && Object.keys(puntoDeVenta).length > 0 ? 
                <FormPointOfSales puntoDeVenta = {puntoDeVenta}>
                </FormPointOfSales>
                
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
                >No se encontró la figurita solicitada</Box>  
            }       
        </Center>
    </div>
  )
}
