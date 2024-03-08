import { Box, NumberInput } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { NumberInputField } from '@chakra-ui/react'
import { NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper } from '@chakra-ui/react'

export const CustomInput = ({ enabled , children, value, label}) => {
  if(!enabled){
    return (
      <Box textAlign="center">
        <Text as="b">{label} </Text>
        <Text>{value}</Text>
      </Box>)
  }
  return children
}

export const CustomTextInput = ({ value, onChange, type }) => {
  return (
    <Input
      type = {type}
      required
      value = {value}
      onChange = {onChange}
      border = "1px"
      borderColor = "var(--footerColor)"
      borderRadius = {8}
      width = "15em"
      height = "2em"
      textAlign = "center"
    />
  )
}

export const CustomNumberInput = ({ value, onChange }) => {
  return (
    <NumberInput defaultValue = {value} >
      <NumberInputField
          type = "number"
          onChange = {onChange}
          border = "1px" 
          borderColor = "var(--footerColor)" 
          borderRadius = {8} 
          width = '15em' 
          height ='2em'
          textAlign = 'center'
        />
      <NumberInputStepper>
          <NumberIncrementStepper/>
          <NumberDecrementStepper/>
      </NumberInputStepper>         
    </NumberInput>  
  )
}
