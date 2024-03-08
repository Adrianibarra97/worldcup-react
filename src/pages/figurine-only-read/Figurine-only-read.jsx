import { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { Header } from '../../components/header/Header'
import { figurineService } from '../../services/figurine/Figurine.service'
import { Loading } from '../../components/loading/Loading'
import { FigurineForm } from '../../components/figurine-form/Figurine-form'

export const FigurineOnlyReadProperties = () => {
  const [figurita, setFiguritas] = useState(undefined)
  const [fueBuscado, setFueBuscado] = useState(false)
  const {id} = useParams()
  
  const figurine = async () =>{
    try{
      const figuritaFromService = await figurineService.getFigurineById(id)
      setFiguritas(figuritaFromService)
    }catch(e){
      console.log(e)
    }finally{
      setFueBuscado(true)
    }
  }
  useEffect(()=>{
    figurine()
  },[])

  return (
    <div className = 'main'>
      <Header text="Propiedades"></Header>
      <Box display = "flex" flexDirection="column" 
            justifyContent="space-between" 
            backgroundColor="var(--backgroundColor)" height="79vh" p={5}>
          {fueBuscado ? 
            figurita ? 
                <FigurineForm figuritaToShow={figurita}></FigurineForm>
              : 
                <Text align="center" as="b">Ocurrio un error, inténtelo más tarde.</Text>
            :<Loading></Loading>
          }
      </Box>
    </div>
  )
}