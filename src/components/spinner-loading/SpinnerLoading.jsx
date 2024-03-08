import { Box, Spinner } from '@chakra-ui/react'

export const SpinnerLoading = ({ spinnerActive }) => {

  return (
    <Box
      display = { spinnerActive ? 'flex' : 'none'}
      direction = 'row' 
      spacing = {4}
      width = {'2.5em'}
      height = {'2.5em'}
      justifyContent = {'center'}
      alignItems = {'center'}
    >
      <Spinner
        width = {'100%'}
        height = {'100%'}
        speed = '1.0s'
        emptyColor = 'gray.100'
        color = {'var(--primaryColor)'}
      />
    </Box>
  )
}