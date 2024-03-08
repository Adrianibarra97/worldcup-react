import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'

export const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}