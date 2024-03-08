import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Divider } from "@chakra-ui/react"

export const Players = ({
  jugador,
  onlyRead,
  edit,
  ventanaMensaje,
  setIdDeletePressed
}) => {
  return (
    <Card border="1px" borderColor="var(--borderBoard)" backgroundColor="white" borderRadius={8}>
      <Box pl={2} pr={2} pt={2}>
        <CardHeader display="flex" justifyContent="space-around" alignItems="center">
          <i className="fa-solid fa-person-running"></i>
          <Text as="b" onClick={() => onlyRead(jugador.id)}>{jugador.nombre} {jugador.apellido}</Text>
          <Box display="flex" flexDirection="column" gap={3}>
            <i onClick={() => {
              setIdDeletePressed(jugador.id);
              ventanaMensaje();
            }} className="fa-regular fa-trash-can location__color"></i>
            <i onClick={() => edit(jugador.id)} className="fa-solid fa-pencil location__color"></i>
          </Box>
        </CardHeader>
        <Divider variant="solid" border="" borderColor="lightblue" mt={1} />
        <CardBody>
          <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Text>{jugador.fechaNacimiento.toLocaleDateString()}</Text>
            <Text as="b">| </Text>
            <i className="fa-solid fa-shirt"></i>
            <Text>{jugador.numeroCamiseta}</Text>
            <Text as="b">| </Text>
            <i className="fa-regular fa-flag"></i>
            <Text>{jugador.seleccion.pais}</Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-around" marginLeft={2} marginRight={2}>
            <div>{jugador.posicion}</div>
            <Text as="b">| </Text>
            <div><i className="fa-solid fa-up-down"></i>{jugador.altura} mts</div>
            <Text as="b">| </Text>
            <div><i className="fa-solid fa-weight-scale"></i>{jugador.peso} kgs</div>
          </Box>
        </CardBody>
        <CardFooter justifyContent="center">
          <Text as="b">U$S {jugador.cotizacion}</Text>
        </CardFooter>
      </Box>
    </Card>
  )
}
