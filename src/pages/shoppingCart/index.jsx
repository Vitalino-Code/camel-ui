import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { CartItem } from '../../components/common/cartItem'
import { MainLayout } from '../../components/layout/mainLayout'
import { priceFormatter } from '../../utils'

import { FaTrashAlt } from 'react-icons/fa'

import {
  Budget,
  Container,
  DeleteAllButton,
  EmptyCart,
  ProductList,
  Total,
} from './styles'

const ShoppingCart = () => {
  const [products, setProducts] = useState([])
  const [firstRun, setFirstRun] = useState(true)

  //Performs the first load of data from localStorage
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      if (firstRun) {
        let updatedProducts = JSON.parse(localStorage.getItem('cart'))
        updatedProducts = updatedProducts.map(product => {
          return {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            check: product.check ? product.check : true,
          }
        })
        setProducts(updatedProducts)
        setFirstRun(false)
      }
    }
  }, [firstRun])

  //reset the shopping cart
  const resetCart = () => {
    setProducts([])
    localStorage.removeItem('cart')
  }

  //Update the product list
  const refreshProductsList = updatedProducts => {
    setProducts(updatedProducts)
    localStorage.setItem('cart', JSON.stringify(updatedProducts))
  }

  //Deletes a product from the list using its ID
  const deleteProduct = id => {
    const updatedProducts = products.filter(product => product.id !== id)
    refreshProductsList(updatedProducts)
  }

  //Controls the quantity of each product
  const handleQuantityChange = e => {
    const updatedProducts = products.map(product =>
      product.id === e.target.dataset.id
        ? { ...product, quantity: e.target.value }
        : product,
    )
    refreshProductsList(updatedProducts)
  }

  //Controls whether the product will be added to the purchase or not
  const handleCheckChange = e => {
    const updatedProducts = products.map(product =>
      product.id === e.target.dataset.id
        ? { ...product, check: !product.check }
        : product,
    )
    refreshProductsList(updatedProducts)
  }

  //Returns the total purchase amount
  const getTotal = () => {
    const checkedProduts = products.filter(product => product.check === true)

    return checkedProduts.reduce((accumulator, product) => {
      return accumulator + +product.price * +product.quantity
    }, 0)
  }

  return (
    <>
      <MainLayout>
        <Container>
          <h1>Carrinho de Compras</h1>
          {products.length !== 0 ? (
            <div>
              <ProductList>
                {products.map(product => (
                  <li key={product.id}>
                    <CartItem
                      product={product}
                      productImages={product.images}
                      handleDelete={deleteProduct}
                      handleChangeQuantity={handleQuantityChange}
                      handleCheckChange={handleCheckChange}
                    />
                  </li>
                ))}
              </ProductList>

              <DeleteAllButton onClick={resetCart}>
                Esvaziar Carrinho <FaTrashAlt />
              </DeleteAllButton>
              <Total>
                Total: <span>{priceFormatter(getTotal(), 'BRL')}</span>
              </Total>
              <Budget>Gerar Orçamento</Budget>
            </div>
          ) : (
            <EmptyCart>
              <h3>Seu carrinho está vazio</h3>
              <p>
                Vá para a <Link to={'/'}>página inicial</Link>, e adicione
                produtos ao seu carrinho.
              </p>
            </EmptyCart>
          )}
        </Container>
      </MainLayout>
    </>
  )
}

export { ShoppingCart }
