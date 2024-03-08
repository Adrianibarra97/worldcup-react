import { authService } from '../../../services/auth-service/Auth.service'

import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
  if(authService.isAuthorice()) {
    return <Outlet />
  }
  return <Navigate to = {'/auth/login'} />
}