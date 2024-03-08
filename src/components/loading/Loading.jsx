import { Box } from "@chakra-ui/react"
import { Text } from '@chakra-ui/layout'
import { CircularProgress } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={3}>
      <CircularProgress isIndeterminate color='var(--footerColor)' />
      <Text>Cargando...</Text>
    </Box>
  )
}