import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
import SwiperSlider from '../../components/common/SwiperSlider/index.jsx'

import { useEffect, useState } from 'react'

import { useFetchProducts } from '../../hooks/dataFetching/useFetchProducts.js'
import { useFetchCategories } from '../../hooks/dataFetching/useFetchCategories.js'

import Pagination from '../../components/common/pagination/index.jsx'

const Home = () => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage())

  const { fetchProducts } = useFetchProducts()
  const { fetchCategories } = useFetchCategories()

  function getItemsPerPage() {
    const width = window.innerWidth
    if (width <= 375) return 3
    if (width <= 450) return 4
    if (width <= 768) return 6
    if (width <= 1024) return 8
    return 10
  }

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetchProducts(
      ({ products, pageCount }) => {
        setProducts(products)
        setPageCount(pageCount)
      },
      currentPage,
      itemsPerPage,
    )
    //eslint-disable-next-line
  }, [currentPage, itemsPerPage])

  useEffect(() => {
    fetchCategories(categories => {
      const brandsCategories = categories.filter(category => category.isBrand)
      const trueCategories = categories.filter(category => !category.isBrand)

      setCategories(trueCategories)
      setBrands(brandsCategories)
    })
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <MainLayout>
        <SwiperSlider slides={categories} title={'Categorias'} />
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
        <SwiperSlider slides={brands} title={'Marcas'} />
      </MainLayout>
    </>
  )
}

export { Home }
