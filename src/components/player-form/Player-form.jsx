import { Box } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { playerService } from "../../services/player/Player.service";
import { ButtonDefault } from "../button/Button";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react"
import { CustomInput } from "../customInput/Custom-input";
import { castDate, calcularDate } from "../../util/time";

export const PlayerForm = ({ jugadorToShow , guardar,editable = false }) => {
  const [jugador, setJugador] = useState(jugadorToShow)
  const [opcionesSeleccion, setOpcionesSeleccion] = useState([])
  const [errores, setErrores] = useState({
    nombre:"",
    apellido:"",
    altura:"",
    peso:"",
    numeroCamiseta:"",
    anioDebut:"",
    cotizacion:""
  })

  const getSelecciones = async () => {
    const optionToSet = await playerService.getSelecciones()
    setOpcionesSeleccion(optionToSet)
    if(jugador.id == -1){
      setJugador({
      ...jugador,
      seleccion: optionToSet[0],
      posicion: "Arquero",
      })
    }
  }

  const validadorFormulario = () =>{
    let nuevosErrores = {}
    
    if(jugador.nombre == ""){
      nuevosErrores = {...nuevosErrores, nombre:"El nombre no puede estar vacio"}
    }

    if(jugador.apellido == ""){
      nuevosErrores = {...nuevosErrores, apellido:"El apellido no puede estar vacio"}
    }

    if(jugador.altura <= 0 || jugador.altura > 2.50){
      nuevosErrores = {...nuevosErrores, altura:"la altura debe ser positiva, entre 1 y 2.50 metros"}
    }

    if(jugador.peso <= 0 ){
      nuevosErrores = {...nuevosErrores, peso:"El peso debe ser positvo"}
    }
    if(jugador.numeroCamiseta <= 0 || jugador.numeroCamiseta > 11){
      nuevosErrores = {...nuevosErrores, numeroCamiseta:"El numero de camiseta debe estar entre 1 y 11"}
    }

    if(jugador.anioDebut < 1900 ){
      nuevosErrores = {...nuevosErrores, anioDebut:"El año debe ser de cuatro digitos, desde 1900"}
    }

    if(jugador.cotizacion < 0 ){
      nuevosErrores = {...nuevosErrores, cotizacion:"la cotizacion debe ser positiva "}
    }

    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = () =>{
    if(validadorFormulario()){
      guardar(jugador)
    }
  }

  useEffect(() => {
    getSelecciones()
  }, [])

  return (
      <Box height="100%" display = "flex" flexDirection="column" 
            justifyContent="space-between" 
            backgroundColor="var(--backgroundColor)" p={5}>
        <Box display="flex" flexDirection="column" justifyContent="center" gap={3}>
        <FormControl isInvalid={errores.nombre} >
          <CustomInput enabled={editable} value={jugador.nombre} label="Nombre"> 
            <FormLabel>Nombre</FormLabel>
              <Input
                boxShadow="md"
                width="100%"
                size="lg"
                border="2px"
                borderColor="darkcyan"
                value={jugador.nombre || ''}
                onChange={(e) => {
                  setJugador((jugador) => ({
                    ...jugador,
                    nombre: e.target.value,
                  }));
                }}
              />
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.nombre}</Text></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errores.apellido}>
          <CustomInput enabled={editable} value={jugador.apellido} label="Apellido">
          <FormLabel>Apellido </FormLabel>
          <Input
            boxShadow="md"
            width="100%"
            size="lg"
            border="2px"
            borderColor="darkcyan"
            value={jugador.apellido || ''}
            onChange={(e) => {
              setJugador((jugador) => ({ 
                ...jugador,
                apellido: e.target.value,
              }));
            }}
          />
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.apellido}</Text></FormErrorMessage>
        </FormControl>
        <CustomInput enabled={editable}>
          <Divider variant="solid" border="" borderColor="black" mt={1}/>
        </CustomInput>
        <FormControl >
          <CustomInput enabled={editable} value={jugador.fechaNacimiento.getDate() + "/" + (jugador.fechaNacimiento.getMonth() + 1) + "/" + jugador.fechaNacimiento.getFullYear()} label="Fecha de Nacimiento">
            <FormLabel>Fecha de Nacimiento </FormLabel>
            <Input
              p={1}
              width="100%"
              size="lg"
              border="2px"
              borderColor="darkcyan"
              type="date"
              defaultValue={castDate(jugador.fechaNacimiento) || castDate("2001-01-01")}
              onBlur={(e) => {
                const value = e.target.value;
                const fechaNueva = calcularDate(value)
                setJugador({
                  ...jugador,
                  fechaNacimiento: fechaNueva,
                })
                }
              }
            ></Input>
          </CustomInput>
        </FormControl >
        <FormControl isInvalid={errores.altura} >
          <CustomInput enabled={editable} value={jugador.altura} label="Altura">
            <FormLabel> Altura </FormLabel>
            <NumberInput boxShadow="md"  precision={2} step={0.2}  defaultValue={jugador.altura}
            onChange={(value)=>{
              setJugador({
                ...jugador, 
                altura: value,
              })
            }}>
              <NumberInputField p={1} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
              </NumberInput>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.altura}</Text></FormErrorMessage>
        </FormControl >
        <FormControl isInvalid={errores.peso} >
          <CustomInput enabled={editable} value={jugador.peso} label="Peso">
            <FormLabel>Peso </FormLabel>
            <NumberInput boxShadow="md"  precision={1}  defaultValue={jugador.peso}
            onChange={(value)=>{
              setJugador({
                ...jugador, 
                peso: value,
              })
            }}>
              <NumberInputField p={1} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>  
            </NumberInput>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.peso}</Text></FormErrorMessage>
        </FormControl>
        <CustomInput enabled={editable}>
          <Divider variant="solid" border="" borderColor="black" mt={1}/>
        </CustomInput>
        <FormControl isInvalid={errores.numeroCamiseta}>
          <CustomInput enabled={editable} value={jugador.numeroCamiseta} label="Numero de Camiseta">
            <FormLabel>Nro Camiseta </FormLabel>
              <NumberInput boxShadow="md"  defaultValue={jugador.numeroCamiseta}
                onChange={(value)=>{
                setJugador({
                  ...jugador, 
                  numeroCamiseta: value,
                  })
                }}>
                <NumberInputField p={1} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.numeroCamiseta}</Text></FormErrorMessage>
        </FormControl>
        <FormControl >
          <CustomInput enabled={editable} value={jugador.seleccion.pais} label="Seleccion">
            <FormLabel>Seleccion </FormLabel>
            <Select
              value={jugador.seleccion.pais}
              boxShadow="md"
              style={{ width: "100%", paddingTop: "5px", paddingBottom: "5px" }}
              icon="none"
              onChange={(e) => {
                const selectedValue = e.target.value;
                const selectedObject = opcionesSeleccion.find(
                  (option) => option.pais === selectedValue
                );
                setJugador({
                  ...jugador,
                  seleccion: selectedObject,
                            });
              }}
            >
              {opcionesSeleccion.map((seleccion) => (
                <option key={seleccion.id} > {seleccion.pais} </option>
              ))}
            </Select>
          </CustomInput>
        </FormControl>
        <FormControl isInvalid={errores.anioDebut}>
          <CustomInput enabled={editable} value={jugador.anioDebut} label="Año de debut en la selección">
            <FormLabel>Año de debut en la selección </FormLabel>
            <Input
              p={1}
              width="100%"
              size="lg"
              border="2px"
              borderColor="darkcyan"
              type="number"
              value={jugador.anioDebut}
              onChange={(e) => {
                const value = e.target.value;
                const formattedValue = value.slice(0, 4); // Tomar solo los primeros 4 caracteres
                setJugador({
                  ...jugador,
                  anioDebut: formattedValue !== '' ? parseInt(formattedValue, 10) : '',
                })
              }}
            />
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.anioDebut}</Text></FormErrorMessage>
        </FormControl>
        <FormControl >
          <CustomInput enabled={editable} value={jugador.posicion} label="Posicion">
            <FormLabel>Posicion </FormLabel>
              <Select
              value={jugador.posicion}
              boxShadow="md"
              style={{ width: "100%", paddingTop: "5px", paddingBottom: "5px" }}
              icon="none"
              onChange={(e) => {
                setJugador({
                  ...jugador,
                  posicion: e.target.value,
                });
              }}
              >
                    <option>Arquero</option>
                    <option>Defensor</option>
                    <option>Mediocampista</option>
                    <option>Delantero</option>
              </Select>
        </CustomInput>
        <CustomInput enabled={editable}>
          <Divider variant="solid" border="" borderColor="black" mt={1}/>
        </CustomInput>
        </FormControl >
        <FormControl>
          <CustomInput enabled={editable} value={jugador.esLider.toString()} label="Es lider">
            <FormControl>
              <label htmlFor="esLider" className="label-for-checkbox">
              <input shadow="md"
                className="input_checkbox"
                type="checkbox"
                id="esLider"
                defaultChecked = {jugador.esLider}
                onChange={()=>{
                  setJugador({
                    ...jugador,
                    esLider: !jugador.esLider
                  })
                }}
                ></input>
              Es Lider
              </label>
            </FormControl>
          </CustomInput>
        </FormControl>
        <FormControl isInvalid={errores.cotizacion}>
          <CustomInput enabled={editable}  value={jugador.cotizacion} label="Cotizacion">
            <FormLabel>Cotización  </FormLabel>
              <NumberInput boxShadow="md" precision={2} step={0.5} defaultValue={jugador.cotizacion}
              onChange={(value)=>{
                setJugador({
                  ...jugador, 
                  cotizacion: value,
                })
              }}>
                <NumberInputField p={1} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
          </CustomInput>
          <FormErrorMessage><Text as="b" color={"tomato"}>{errores.cotizacion}</Text></FormErrorMessage>
        </FormControl>
        </Box>
        <Box display="flex" justifyContent="space-around" marginTop={5}>
          {editable ? 
            <Box onClick={()=>handleSubmit()}>
              <ButtonDefault backgroundColor = "var(--footerColor)" text="Guardar" type="submit"/>
            </Box>
          :<></>
          }
          <ButtonDefault backgroundColor = "var(--secondaryColor)" 
            redirect="/players" text = "Volver"/>
        </Box>
      </Box>
    
  )
}
