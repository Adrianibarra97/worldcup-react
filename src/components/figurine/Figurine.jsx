import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Divider } from "@chakra-ui/react"

export const Figurine = ({figurita, onlyRead, edit, ventanaMensaje, setIdDeletePressed}) => {
    return (
      <Card border="1px" borderColor = "var(--borderBoard)" backgroundColor="white" borderRadius={8}>
        <Box pl={2} pr={2} pt={2}>
          <CardHeader display="flex" justifyContent="space-around" alignItems="center">
            <i className = "fa-solid fa-clipboard-user location__color"></i>
            <Text as="b" onClick={() => onlyRead(figurita.id)}>{figurita.jugador.nombre} {figurita.jugador.apellido}</Text>
            <Box display="flex" flexDirection="column" gap={3}>
              <i onClick = { 
                () => {
                  setIdDeletePressed(figurita.id)
                  ventanaMensaje()
                  }
                } className="fa-regular fa-trash-can location__color"></i>
              <i onClick = { () => edit(figurita.id)} className="fa-solid fa-pencil location__color"></i>
            </Box>
          </CardHeader>
          <Divider variant="solid" border="" borderColor="lightblue" mt={1}/>
          <CardBody display="flex" alignItems="center" justifyContent="space-around">
            <div><i className="fa-solid fa-hashtag"></i> {figurita.numero}</div>|
            <div>
              {
                figurita.onFire
                ? <div>
                    <i className = "fa-solid fa-fire-flame-curved content__item content__item--color "></i> on fire
                  </div>
                : <div>
                  <i className = "fa-solid fa-fire-flame-curved content__item content__item--enabled "></i> 
                  <Text as='del' ml={1}>on fire</Text>
                </div>
              }
            </div>|
            <div><i className="fa-solid fa-print "></i> {figurita.nivelImpresion}</div>
          </CardBody>
          <CardFooter justifyContent="center">
            <Text as="b">Valoracion {figurita.jugador.valoracion}</Text>
          </CardFooter>
        </Box>
      </Card>
    )
}

