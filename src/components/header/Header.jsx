import { Box } from "@chakra-ui/react"
import { Text } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'

export const Header = ({text}) => {
  return (
    <div>
      <Box backgroundColor={'var(--footerColor)'} >
        <Heading>
          <Text pl={2}color="#FFF" as='b' fontSize="32px" >
            {text}
          </Text>
        </Heading>
      </Box>
    </div>
  )
}