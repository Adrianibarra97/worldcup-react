import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export function AlertMessage({isOpen, onClose, objetoAEliminar, deleteFunction}) {
    
    return (
      <>
        <AlertDialog isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
          <AlertDialogOverlay />
          <AlertDialogContent
            mx="auto"
            my="auto"
            width="fit-content"
            bg="var(--footerColor)"
            color="white"
            borderWidth="2px"
            borderRadius="lg"
            p={6}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar {objetoAEliminar}
            </AlertDialogHeader>
            <AlertDialogBody>
              ¿Estás seguro/a? Los cambios serán permanentes y no se podrán deshacer.
            </AlertDialogBody>
            <AlertDialogFooter mt={3}>
              <Button borderRadius="3px" pl={2} pr={2} border="solid 1px" background="var(--backgroundLoginColor)" color="black" onClick={onClose}>
                Cerrar
              </Button>
              <Button borderRadius="3px" pl={2} pr={2} border="solid 1px " ml={10} background="red" color="white" onClick={()=> {
                deleteFunction()
                onClose
              }
              }>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </>
    )
  }