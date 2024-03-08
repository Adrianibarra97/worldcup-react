import { FormPointOfSales } from '../../components/form-point-of-sales/FormPointOfSales'
import { pointOfSaleService } from '../../services/pointOfSale/PointOfSale.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Loading } from '../../components/loading/Loading'
import { useToast, Box } from '@chakra-ui/react'

export const PointOfSaleCreatePage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const toast = useToast()
	const puntoDeVenta = {
		nombreComercial: "",
		stockDeSobres: 0,
		domicilioPuntoDeVenta: {
			ubicacionGeograficaX: 0,
			ubicacionGeograficaY: 0,
			calle: "",
			altura: 0,
			localidad: "",
			provincia: ""
		},
		tipoPuntoDeVenta: "Kiosko",
		pedidosPendientesPuntoDeVenta: 0
	}

	const crearPuntoDeVenta = async (puntoDeVentaNuevo) =>{
		setIsLoading(true)
		await pointOfSaleService.create(puntoDeVentaNuevo)
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
		{
			isLoading 
			? <Loading />
			: puntoDeVenta && Object.keys(puntoDeVenta).length > 0
				? 
					<FormPointOfSales
					puntoDeVenta = {puntoDeVenta}
					guardar = {(puntoDeVentaNuevo) => crearPuntoDeVenta(puntoDeVentaNuevo)}
					editable = {true}
					></FormPointOfSales>
				
				: 
          <Box
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
          >
            No se pudo crear el punto de venta
          </Box>
		}
		</div>
  )
}