import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ButtonDefault = (props) => {
  return (
    <Button p={[2,2]} border="solid 3px var(--primaryColor)" borderRadius="1em" 
        color="white" backgroundColor={props.backgroundColor} >
      <Link to={props.redirect}>{props.text}</Link>
    </Button>
  )
}
