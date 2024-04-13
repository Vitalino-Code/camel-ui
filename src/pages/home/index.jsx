import Brands from '../../components/common/brands/index.jsx'
import Categories from '../../components/common/categories/index.jsx'
import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
// import { products } from '../../mock/produtos.js'
import { useEffect, useState } from 'react'

import { useFetchProducts } from '../../hooks/dataFetching/useFetchProducts.js'

import Pagination from '../../components/common/pagination/index.jsx'

const Home = () => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const fetchProducts = useFetchProducts().fetchProducts

  useEffect(() => {
    fetchProducts(({ products, pageCount }) => {
      setProducts(products)
      setPageCount(pageCount)
    }, currentPage)
    //eslint-disable-next-line
  }, [currentPage])

  return (
    <>
      <MainLayout>
        <Categories />
        <CardContainer title="Produtos em Destaque">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              productImages={product.images}
              id={product.id}
            />
          ))}
          <Pagination pageCount={pageCount} setCurrentPage={setCurrentPage} />
        </CardContainer>
        <Brands />
      </MainLayout>
    </>
  )
}

export default Home
