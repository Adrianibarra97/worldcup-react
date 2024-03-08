import { FormControl } from '@chakra-ui/react'
import { FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { CustomTextInput, CustomNumberInput, CustomInput } from "../customInput/Custom-input"
import { ButtonDefault } from "../button/Button"
import { Text } from '@chakra-ui/react'

export const FormPointOfSales = ({puntoDeVenta, guardar, editable = false}) => {
    const [puntoDeVentaNuevo, setPuntoDeVentaNuevo] = useState(puntoDeVenta)

    const [errores, setErrores] = useState({
        nombreComercial: "",
        calle:"",
        altura:"",
        stockDeSobres:"",
        pedidosPendientesPuntoDeVenta:""
      })

    const validadorFormulario = () =>{
        let nuevosErrores = {}

        if(puntoDeVentaNuevo.nombreComercial.length == 0){
            nuevosErrores = {...nuevosErrores, nombreComercial:"El nombre no debe estar vacio"}
          }
        
        if(puntoDeVentaNuevo.domicilioPuntoDeVenta.calle.length == 0){
          nuevosErrores = {...nuevosErrores, calle:"La calle no debe estar vacia"}
        }

        if(puntoDeVentaNuevo.domicilioPuntoDeVenta.altura < 0){
          nuevosErrores = {...nuevosErrores, altura:"Poner un valor positivo o cero"}
        }
    
        if(puntoDeVentaNuevo.stockDeSobres < 0){
          nuevosErrores = {...nuevosErrores, stockDeSobres:"Poner un valor positivo o cero"}
        }
        if(puntoDeVentaNuevo.pedidosPendientesPuntoDeVenta < 0){
          nuevosErrores = {...nuevosErrores, pedidosPendientesPuntoDeVenta: "Poner un valor positivo o cero"}
        }
        setErrores(nuevosErrores)
    
        return Object.keys(nuevosErrores).length === 0
      }
    
    
    const handleSubmit = () => {
        if (validadorFormulario()){
            guardar(puntoDeVentaNuevo)
        }
    }

  return (
        <Center >
            <Stack 
                as = {'form'}
                onSubmit = { (e) => handleSubmit(e) }
                justifyContent = "space-around" 
                alignItems = "center" 
                direction = 'column' 
                spacing = {7} mt = {5} >
                    <FormControl isInvalid = {errores.nombreComercial}>
                    <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.nombreComercial} label = "Nombre">
                        <FormLabel>Nombre</FormLabel>
                        <CustomTextInput
                            type = 'text'
                            value = {puntoDeVentaNuevo.nombreComercial}
                            onChange = {(event)=> setPuntoDeVentaNuevo({...puntoDeVentaNuevo, nombreComercial: event.target.value})}>
                        </CustomTextInput>
                    </CustomInput>
                    <FormErrorMessage><Text as = "b" color={"tomato"}>{errores.nombreComercial}</Text></FormErrorMessage>
                    </FormControl>
                <FormControl isInvalid = {errores.calle}>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.calle} label = "Calle">
                    <FormLabel>Calle</FormLabel>
                    <CustomTextInput
                        type = 'text'
                        value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.calle}
                        onChange = {(event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, domicilioPuntoDeVenta: {
                                ubicacionGeograficaX: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaX,
                                ubicacionGeograficaY: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaY,
                                calle: event.target.value,
                                altura: puntoDeVentaNuevo.domicilioPuntoDeVenta.altura,
                                localidad: puntoDeVentaNuevo.domicilioPuntoDeVenta.localidad,
                                provincia: puntoDeVentaNuevo.domicilioPuntoDeVenta.provincia
                            }})}>
                    </CustomTextInput>
                </CustomInput>
                <FormErrorMessage><Text as="b" color={"tomato"}>{errores.calle}</Text></FormErrorMessage>
                </FormControl>
                <FormControl isInvalid = {errores.altura}>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.altura} label = "Altura">
                    <FormLabel>Altura</FormLabel>
                    <CustomTextInput
                        type = 'Number'
                        value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.altura}
                        onChange = {((event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, domicilioPuntoDeVenta: {
                                ...puntoDeVentaNuevo.domicilioPuntoDeVenta,
                                ubicacionGeograficaX: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaX,
                                ubicacionGeograficaY: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaY,
                                calle: puntoDeVentaNuevo.domicilioPuntoDeVenta.calle,
                                altura: event.target.value,
                                localidad: puntoDeVentaNuevo.domicilioPuntoDeVenta.localidad,
                                provincia: puntoDeVentaNuevo.domicilioPuntoDeVenta.provincia
                            }}))}>
                    </CustomTextInput>
                </CustomInput>
                <FormErrorMessage><Text as = "b" color = {"tomato"}>{errores.altura}</Text></FormErrorMessage>
                </FormControl>
                <FormControl>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaX} label = "Coordenada X">
                    <FormLabel>Coordenada X</FormLabel>
                    <CustomNumberInput
                        value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaX}
                        onChange = {((event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, domicilioPuntoDeVenta: {
                            ubicacionGeograficaX: event.target.value,
                            ubicacionGeograficaY: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaY,
                            calle: puntoDeVentaNuevo.domicilioPuntoDeVenta.calle,
                            altura: puntoDeVentaNuevo.domicilioPuntoDeVenta.altura,
                            localidad: puntoDeVentaNuevo.domicilioPuntoDeVenta.localidad,
                            provincia: puntoDeVentaNuevo.domicilioPuntoDeVenta.provincia
                            }}))}/>
                </CustomInput>
                </FormControl>
                <FormControl>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaY} label = "Coordenada Y">
                    <FormLabel>Coordenada Y</FormLabel>
                    <CustomNumberInput
                        value = {puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaY}
                        onChange = {((event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, domicilioPuntoDeVenta: {
                                ubicacionGeograficaX: puntoDeVentaNuevo.domicilioPuntoDeVenta.ubicacionGeograficaX,
                                ubicacionGeograficaY: event.target.value,
                                calle: puntoDeVentaNuevo.domicilioPuntoDeVenta.calle,
                                altura: puntoDeVentaNuevo.domicilioPuntoDeVenta.altura,
                                localidad: puntoDeVentaNuevo.domicilioPuntoDeVenta.localidad,
                                provincia: puntoDeVentaNuevo.domicilioPuntoDeVenta.provincia
                            }}))}/>
                </CustomInput>
                </FormControl>
                <FormControl isInvalid = {errores.stockDeSobres}>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.stockDeSobres} label = "Sobres disponibles">
                    <FormLabel>Sobres disponibles</FormLabel>
                    <CustomNumberInput
                        value = {puntoDeVentaNuevo.stockDeSobres}
                        onChange = {((event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, stockDeSobres: event.target.value}))}/>
                </CustomInput>
                <FormErrorMessage><Text as="b" color={"tomato"}>{errores.stockDeSobres}</Text></FormErrorMessage>
                </FormControl>
                <FormControl isInvalid = {errores.pedidosPendientesPuntoDeVenta}>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.pedidosPendientesPuntoDeVenta} label = "Pedidos pendientes">
                    <FormLabel>Pedidos pendientes</FormLabel>
                    <CustomNumberInput
                        value = {puntoDeVentaNuevo.pedidosPendientesPuntoDeVenta}
                        onChange = {((event)=>
                            setPuntoDeVentaNuevo({...puntoDeVentaNuevo, pedidosPendientesPuntoDeVenta: event.target.value}))}/>
                </CustomInput>
                <FormErrorMessage><Text as="b" color={"tomato"}>{errores.pedidosPendientesPuntoDeVenta}</Text></FormErrorMessage>
                </FormControl>
                <FormControl>
                <CustomInput enabled = {editable} value = {puntoDeVentaNuevo.tipoPuntoDeVenta} label = "Tipo de negocio">
                    <FormLabel>Tipo de negocio</FormLabel>
                        <Select
                            defaultValue = {puntoDeVentaNuevo.tipoPuntoDeVenta}
                            border = "1px" 
                            borderColor = "var(--footerColor)" 
                            borderRadius = {8}
                            height ='2em'
                            textAlign = 'center'
                            onChange = {((event)=>
                                setPuntoDeVentaNuevo({...puntoDeVentaNuevo, tipoPuntoDeVenta: event.target.value}))}
                        >
                            <option>Kiosko</option>
                            <option>Supermercado</option>
                            <option>Libreria</option>
                        </Select>
                    </CustomInput>
                </FormControl>
                <Box display = "flex" justifyContent = "space-around" gap = {10} mb = {3}>
                    {editable ? 
                    <Box onClick = {()=>handleSubmit()}>
                    <ButtonDefault backgroundColor = "var(--footerColor)" text = "Guardar" type = "submit"/>
                    </Box>
                    :<></>
                    }
                    <ButtonDefault backgroundColor = "var(--secondaryColor)" 
                    redirect="/point-of-sales" text = "Volver"/>
                </Box>
            </Stack>    
        </Center>
  )
}
