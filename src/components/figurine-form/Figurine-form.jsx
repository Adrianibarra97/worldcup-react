import { Box } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Input } from "@chakra-ui/react"
import { figurineService } from "../../services/figurine/Figurine.service"
import { ButtonDefault } from "../button/Button"
import { Text } from "@chakra-ui/react"
import { valoracionBase } from "../../domain/Figurine"
import { CustomInput } from "../customInput/Custom-input"

export const FigurineForm = ({ figuritaToShow , guardar, editable = false}) => {
  const [figurita, setFigurita] = useState(figuritaToShow)
  const [options, setOptions] = useState([])
  const [errores, setErrores] = useState({
    numero:"",
    url:""
  })
  const getPlayers = async () => {
    const optionToSet = await figurineService.getPlayers()
    setOptions(optionToSet)
    if(figurita.jugador.id == undefined){
      setFigurita({
        ...figurita,
        jugador: optionToSet[0]
      })
    }
  }

  const validadorFormulario = () =>{
    let nuevosErrores = {}
    
    if(figurita.numero <= 0 || figurita.numero > 999){
      nuevosErrores = {...nuevosErrores, numero:"El numero debe estar entre 1 y 999"}
    }

    if(figurita.url == ""){
      nuevosErrores = {...nuevosErrores, url:"Ingresa una URL válida"}
    }
    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = () =>{
    if(validadorFormulario()){
      guardar(figurita)
    }
  }

  useEffect(() => {
    getPlayers()
  }, [])

  return (
    <Box display="flex" flexDirection="column" gap={50} justifyContent="space-around" height="100%">
      <Box display="flex" flexDirection="column" gap="10px">
        <FormControl isInvalid={errores.numero}>
          <CustomInput enabled={editable} value={figurita.numero} label="Nro">
            <Box>
              <FormLabel><Text as="b">Nro</Text></FormLabel>
              <NumberInput boxShadow="md" defaultValue={figurita.numero}
              onChange={(value)=>{
                setFigurita({
                  ...figurita, 
                  numero: value,
                })
              }}>
                <NumberInputField p={1} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.numero}</Text></FormErrorMessage>
        </FormControl>
        <FormControl>
          <CustomInput enabled={editable} label="Jugador" value={figurita.jugador.nombre + " " + figurita.jugador.apellido}>
            <Box>
              <FormLabel><Text as="b">Jugador</Text></FormLabel>
              <Select
                value={figurita.jugador.nombre + " " + figurita.jugador.apellido}
                boxShadow="md"
                style={{ width: "100%", paddingTop: "5px", paddingBottom: "5px" }}
                icon="none"
                onChange={(e)=>{
                    const selectedValue = e.target.value
                    const selectedObject = options.find(option => option.nombre + " " + option.apellido === selectedValue)
                    setFigurita({
                      ...figurita,
                      jugador:selectedObject
                    })
                  }}
                >
                {options.map((op) => {
                  return <option key={op.id}>{op.nombre + " " + op.apellido}</option>
                })}
              </Select>
            </Box>
          </CustomInput>
        </FormControl >
        <Box>
          <CustomInput enabled={editable} label="On Fire" value={figurita.onFire}>
            <Box>
              <FormLabel><Text as="b" >On Fire</Text></FormLabel>
              <FormControl>
                <label htmlFor="onFire" className="label-for-checkbox">
                <input
                  className="input_checkbox"
                  type="checkbox"
                  id="onFire"
                  defaultChecked = {figurita.onFire}
                  onChange={()=>{
                    setFigurita({
                      ...figurita,
                      onFire: !figurita.onFire
                    })
                  }}
                  ></input>
                On Fire
                </label>
              </FormControl>
            </Box>
          </CustomInput>
        </Box>
        <FormControl width="100%">
          <CustomInput enabled={editable} label="Nivel de Impresión" value={figurita.nivelImpresion}>
            <Box>
              <FormLabel><Text as="b">Nivel de impresión</Text></FormLabel>
              <Select
                boxShadow="md"
                defaultValue={figurita.nivelImpresion}
                style={{ width: "100%", paddingTop: "5px", paddingBottom: "5px" }}
                icon="none"
                onChange={(e)=>{
                  setFigurita({
                    ...figurita,
                    nivelImpresion:e.target.value
                  })
                }}
                >
                <option>BAJA</option>
                <option>MEDIA</option>
                <option>ALTA</option>
              </Select>
            </Box>
          </CustomInput>
        </FormControl>
        <FormControl isInvalid={errores.url} isRequired>
          <CustomInput enabled={editable} value={<></>}>
            <Box>
                <FormLabel>URL de la imagen </FormLabel>
                  <Input boxShadow="md" p={1} width="100%" size="lg" 
                    defaultValue={figurita.url}
                    onChange={(e)=>{
                      setFigurita({
                        ...figurita,
                        url:e.target.value
                      })
                    }}
                    />
              </Box>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.url}</Text></FormErrorMessage>
        </FormControl>
        <Box display="flex" flexDirection="column" alignItems="center" gap="10px" mt={5}>
          <Text as="b">Valoracion Base {valoracionBase(figurita).toLocaleString(undefined, {maximumFractionDigits:2})}</Text>
          <Text as="b">Valoracion Total {figurita.jugador.valoracion}</Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-around">
        {editable ? 
        <Box onClick={()=>handleSubmit()}>
          <ButtonDefault backgroundColor = "var(--footerColor)" text="Guardar" type="submit"/>
        </Box>
        :<></>
        }
        <ButtonDefault backgroundColor = "var(--secondaryColor)" 
          redirect="/figurines" text = "Volver"/>
      </Box>
    </Box>
  )
}
