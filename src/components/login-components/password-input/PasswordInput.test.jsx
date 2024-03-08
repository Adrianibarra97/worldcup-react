import { render } from "@testing-library/react"
import { PasswordInput } from "./PasswordInput"

describe('Password Input', () => {
  it('smoke test de password input.', () => {
    //Arrange: 
    const insertValue = (e) => { return e.target.value }
    render(<PasswordInput passwordValue = { (e) => insertValue(e) }/>)

    //Act:
    // Introducir valores en el input.

    //Assert:
    // Comprobar que insertValue tiene el mismo valor que seteamos.
  })
})