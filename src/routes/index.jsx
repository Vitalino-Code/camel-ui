import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Product } from '../pages/product'
import { UserManagement } from '../pages/crud/index'

export const RoutesManager = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
