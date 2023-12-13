import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { AppRoutes } from './app.routes'
// import { AuthRoutes } from './auth.routes'
import Home from '../pages/home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { UserManagement } from '../pages/crud/index'

// import { useAuth } from '../contexts/AuthContext'

export const RoutesManager = () => {
  // const { user } = useAuth()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
