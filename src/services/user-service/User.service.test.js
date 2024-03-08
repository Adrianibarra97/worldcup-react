import { expect } from "vitest"
import { userServiceStub } from "./User.service" 

describe('User Service', () => {
  it('El Service nos devuelve una lista de status correctamente.', async () => {
    //Arrange:
    var statusUser = []

    //Act:
    await userServiceStub.getStatus().then(data => { statusUser = data })

    //Assert:
    expect(statusUser.length).toBe(4)
    expect(statusUser[0].name).toBe('figuritas ofrecidas')
    expect(statusUser[0].amount).toBe(13)
  })

  it('El Service tiene un problema y devuelve un 404.', async () => {
    //Arrange:
    userServiceStub.statusUserJSON = []
    var errorMessage = ''
    
    //Act:
    await userServiceStub.getStatus().catch(error => { errorMessage = error})

    //Assert:
    expect(errorMessage).toBe('Error: 404')
  })
})