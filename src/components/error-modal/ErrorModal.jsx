import {
	Box,
	Button,
	Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

export const ErrorModal = ({ error, isOpen, onClose }) => {

  return (
    <Modal
			isCentered
			isOpen = { isOpen }
			onClose = { onClose }
		>
			<ModalOverlay
				bg = 'none'
				backdropFilter = 'blur(2px) hue-rotate(60deg)'
			/>
			<ModalContent
				display = {'flex'}
				flexDirection = {'column'}
				width = {'100%'}
				height = {'100%'}
				justifyContent = {'center'}
				alignItems = {'center'}
			>
				<Box
					display = {'flex'}
          flexDirection = {'column'}
					width = {'18em'}
					height = {'15em'}
          border = {'1px solid var(--footerColor)'}
					borderRadius = {'1em'}
          backgroundColor = {'var(--backgroundLoginColor)'}
          boxShadow = {'3px 3px 10px grey'}
          overflow = {'hidden'}
				>
          <ModalCloseButton
            display = {'flex'}
            padding = {'0.8em'}
            justifyContent = {'flex-end'}
            fontWeight = {'bolder'}
            color = {'black'}
          />
					<ModalHeader
            display = {'flex'}
            margin = {'0.1em'}
            fontSize = {'2em'}
            fontWeight = {'bolder'}
            color = {'red'}
          >{ error.code }</ModalHeader>
					<ModalBody
            display = {'flex'}
            height = {'5em'}
            margin = {'0.1em 0.5em'}
            fontSize = {'1em'}
            fontWeight = {'bolder'}
          >
						<Text>{ error.message }</Text>
					</ModalBody>
					<ModalFooter
            display = {'flex'}
            height = {'3em'}
            padding = {'1em'}
            fontWeight = {'bolder'}
            justifyContent = {'flex-end'}
            alignItems = {'center'}
            overflow = {'hidden'}
          >
						<Button
              display = {'flex'}
              height = {'3em'}
              width = {'4.5em'}
              padding = {'1em'}
              fontSize = {'1em'}
              color = {'var(--backgroundLoginColor)'}
              backgroundColor = {'var(--primaryColor)'}
              border = {'1px solid var(--footerColor)'}
              borderRadius = {'1em'}
              fontWeight = {'bold'}
              justifyContent = {'center'}
              alignItems = {'center'}
              onClick = { onClose }
            >Close</Button>
					</ModalFooter>			
				</Box>
			</ModalContent>	
    </Modal>
  )
}
