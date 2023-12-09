import { useAuth } from '../contexts/authContext'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function RoutesManager() {
  const { user } = useAuth

  return <>{user ? <AuthRoutes /> : <AppRoutes />}</>
}
