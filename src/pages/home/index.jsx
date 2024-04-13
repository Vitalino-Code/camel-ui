import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
import { brands } from '../../mock/brands.js'
import { categories } from '../../mock/categories.js'
import SwiperSlider from '../../components/common/SwiperSlider/index.jsx'

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
        <SwiperSlider slides={categories} />
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
        <SwiperSlider slides={brands} />
      </MainLayout>
    </>
  )
}

export default Home
