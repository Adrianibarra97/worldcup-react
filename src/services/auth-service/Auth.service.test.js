import { authServiceStub } from "./Auth.service"

describe('Auth Service', () => {
  it('El usuario se loguea correctamente y nos devuelve la ruta a donde redirigirnos.', async () => {
    //Arrange:
    const loginJSON = {
      'username' : 'admin',
      'password' : '1111'
    }

    //Act:
    const redirectRoute = await authServiceStub.login(loginJSON)

    //Assert:
    expect(redirectRoute).toBe('/home')
  })

  it('El usuario ingresa su datos de forma incorrecta y recibimos un error.', async () => {
    //Arrange:
    var redirectRoute = ''
    const loginJSON = {
      'username' : 'Juan',
      'password' : '2354'
    }

    //Act:
    await authServiceStub.login(loginJSON).catch(error => { redirectRoute = error })

    //Assert:
    expect(redirectRoute).toBe('El usuario y/o la contraseña, no corresponden!')
  })

  it('Al desloguearse el localStorage se pasa a undefined.', async () => {
    //Arrange:
    const loginJSON = {
      'username' : 'admin',
      'password' : '1111'
    }

    await authServiceStub.login(loginJSON)

    //Act:
    authServiceStub.logout()

    //Assert:
    expect(authServiceStub.localStorage).toBe(undefined)
  })

  it('Al desloguearse el localStorage se pasa a undefined.', async () => {
    //Arrange:
    const loginJSON = {
      'username' : 'admin',
      'password' : '1111'
    }
    await authServiceStub.login(loginJSON)

    //Act:
    authServiceStub.logout()

    //Assert:
    expect(authServiceStub.localStorage).toBe(undefined)
  })

  it('El usuario está logueado, por eso el service nos da el paso.', async () => {
    //Arrange:
    const loginJSON = {
      'username' : 'admin',
      'password' : '1111'
    }
    
    //Act:
    await authServiceStub.login(loginJSON)

    //Assert:
    expect(authServiceStub.isAuthorice()).toBe(true)
  })

  it('El usuario no pudo loguearse, por eso el service no da el paso.', async () => {

    //Act:
    authServiceStub.logout()

    //Assert:
    expect(authServiceStub.isAuthorice()).toBe(false)
  })
})