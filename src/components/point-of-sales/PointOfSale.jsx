import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { useNavigate } from "react-router-dom"

export const PointOfSale = ({puntoDeVenta, setIdDeletePressed, ventanaMensaje}) => {
  
  const navigate = useNavigate()
  
  const irDetallePuntoDeVenta = () => {
    navigate("/detail-point-of-sales/" + puntoDeVenta.id)
  }

  const editarPuntoDeVenta = () => {
    navigate("/edit-point-of-sales/" + puntoDeVenta.id)
  }

    return (
      <Card border="1px" borderColor = "var(--borderBoard)" backgroundColor = "white" borderRadius = {8}>
        <Box pl = {2} pr = {2} pt = {2}>
          <CardHeader display = "flex" justifyContent = "space-around" alignItems = "center">
            <i className = "fa-solid fa-store location__color"></i>
            <Text as = "b" fontSize = {15} onClick = {irDetallePuntoDeVenta}>{puntoDeVenta.nombreComercial}</Text>
            <Box display = "flex" flexDirection = "column" gap = {3}>
              <i onClick = {() => {
                setIdDeletePressed(puntoDeVenta.id)
                ventanaMensaje()}} className = "fa-regular fa-trash-can location__color"></i>
              <i onClick = {editarPuntoDeVenta} className = "fa-solid fa-pencil location__color"></i>
            </Box>
          </CardHeader>
          <Divider variant = "solid" border = "" borderColor = "lightblue" mt = {1}/>
          <CardBody display="flex" alignItems = "center" justifyContent = "center">
            <Box mr = {2}><i className = "fa-solid fa-location-dot location__color"></i> {puntoDeVenta.domicilioPuntoDeVenta.calle} {puntoDeVenta.domicilioPuntoDeVenta.altura}</Box> |
            <Box ml = {2}><i className = "fa-solid fa-clipboard-user location__color"></i> {puntoDeVenta.stockDeSobres} Sobres</Box>
          </CardBody>
          <CardFooter justifyContent="center">
            <Text as = "b">Tipo {puntoDeVenta.tipoPuntoDeVenta}</Text>
          </CardFooter>
        </Box>
      </Card>
    )
  }
