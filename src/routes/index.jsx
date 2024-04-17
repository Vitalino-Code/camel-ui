import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Category } from '../pages/category'
import { Home } from '../pages/home'
import { Product } from '../pages/product'
import { ShoppingCart } from '../pages/shoppingCart'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { SearchResult } from '../pages/searchResult/index'
import { UserManagement } from '../pages/crud/index'

export const RoutesManager = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="categoria/:id" element={<Category />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/carrinho" element={<ShoppingCart />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/busca/:searchParam" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
