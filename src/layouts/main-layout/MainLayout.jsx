import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation'

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  )
}