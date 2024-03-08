import {useEffect, useState}from 'react'
import { Header } from '../../components/header/Header'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { ButtonDefault } from '../../components/button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { FigurineForm } from '../../components/figurine-form/Figurine-form'
import { Loading } from '../../components/loading/Loading'
import { figurineService } from '../../services/figurine/Figurine.service'
import { Center } from '@chakra-ui/react'

export const FigurineProperties = () => {
  const [figurita,setFigurita] = useState(undefined)
  const [fueBuscado,setFueBuscado] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const getFigurita = async () =>{
    try{
      const figuritaFromService = await figurineService.getFigurineById(id)
      setFigurita(figuritaFromService)
    }catch(e){
      console.log(e)
    }finally{
      setFueBuscado(true)
    }
  }
  const actualizarFigurita = async (figurita) =>{
    await figurineService.update(figurita)
    navigate("/figurines")
  }
  useEffect(()=>{
    getFigurita()
  },[])
  
  return (
    <div className = 'main'>
      <Header text="Propiedades"></Header>
        <Center>
            {fueBuscado 
              ? 
              figurita != undefined ? 
              <Box display="flex" flexDirection="column" m="5vh 0">
                <FigurineForm figuritaToShow={figurita} guardar={actualizarFigurita} editable={true}></FigurineForm>
              </Box>
              :
              <Box display="flex" flexDirection="column" gap="30px" justifyContent="space-between" height="100%">
                  <Text align="center" as="b">Ocurrio un error, inténtelo más tarde.</Text>
                  <Box display="flex" justifyContent="center">
                    <ButtonDefault redirect="/figurines" backgroundColor="var(--footerColor)" text="Volver"></ButtonDefault>
                  </Box>
                </Box>
              : <Loading/>
            }
        </Center>
    </div>
  )
}