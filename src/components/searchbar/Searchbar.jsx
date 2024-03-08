import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import { Box } from '@chakra-ui/layout'
import './searchbar.css'

export const Searchbar = ({search}) => {
  const [textoBusqueda, setTextoBusqueda] = useState("")
  const [busquedaAnterior, setBusquedaAnterior] = useState("")
  
  const handlerKeyDown = (e)=>{
    if(e.key === "Enter"){
      lanzarBusqueda()
    }
  }
  const lanzarBusqueda = () =>{
    if(textoBusqueda != busquedaAnterior){
      setBusquedaAnterior(textoBusqueda)
      search(textoBusqueda)
    }
  }

  return (	
    <Box className = 'searchbar searchbar__items'>
      <Input onKeyDown={handlerKeyDown} className = 'searchbar__item searchbar__item--padding' variant = 'filled' placeholder = 'Buscar' onChange = {(e)=>setTextoBusqueda(e.target.value)}></Input>
      <Button onClick = {()=>lanzarBusqueda()} className = 'searchbar__item searchbar__item--button'>
        <SearchIcon/>
      </Button>
    </Box>
  )
}