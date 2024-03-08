import { render } from "@testing-library/react"
import { UserInput } from "./UserInput"

describe('User Input', () => {
  it('smoke test de user input.', () => {
    //Arrange: 
    const insertValue = (e) => { return e.target.value }
    render(<UserInput usernameValue = { (e) => insertValue(e) }/>)

    //Act:
    // Introducir valores en el input.

    //Assert:
    // Comprobar que insertValue tiene el mismo valor que seteamos.
  })
})