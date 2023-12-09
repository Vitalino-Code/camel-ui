import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

import { useAuth } from '../contexts/AuthContext'

export const RoutesManager = () => {
  const { user } = useAuth()

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
