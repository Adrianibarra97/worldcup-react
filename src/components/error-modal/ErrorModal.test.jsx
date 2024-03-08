import { render } from "@testing-library/react"
import { ErrorModal } from "./ErrorModal"
import { Error } from "src/domain/Error"

describe('Error Modal', () => {
    it('smoke test de error modal.', () => {
      //Arrange:
      const error = new Error('401', 'El usuario y/o contraseña no corresponde!')
      render(<ErrorModal error = { error }/>)
  
      //Act:
      // Introducir valores en el input.
  
      //Assert:
      // Comprobar que insertValue tiene el mismo valor que seteamos.
    })
  })