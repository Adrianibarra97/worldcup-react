import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className = 'main'>
      <h1>Error 404: La página solicitada no se encuentra!</h1>
      <Link to = "/home">Volver al home</Link>
    </div>
  )
}
