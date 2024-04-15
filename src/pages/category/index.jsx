import { useParams } from 'react-router-dom'
import { MainLayout } from '../../components/layout/mainLayout'

import { Container, Label, Subcategories, Subcategory } from './styles'
import { useEffect, useState } from 'react'
import { useFetchCategoryById } from '../../hooks/dataFetching/useFetchCategoryByID'
import { useFetchProducts } from '../../hooks/dataFetching/useFetchProducts.js'
import { useFetchSubcategories } from '../../hooks/dataFetching/useFecthSubcategories.js'
import { CardContainer } from '../../components/common/CardContainer'
import { ProductCard } from '../../components/common/Card'

import Pagination from '../../components/common/pagination/index.jsx'

// import { products } from '../../mock/produtos.js'

const Category = () => {
  const { id } = useParams()
  const [category, setCategory] = useState({})
  const { FetchCategoryById } = useFetchCategoryById()
  const { FetchSubcategories } = useFetchSubcategories()
  const [subcategories, setSubcategories] = useState([])
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const { fetchProducts } = useFetchProducts()

  const textFormatter = str => {
    if (!str) {
      return ''
    }
    const words = str.split(' ')
    const capitalizedWords = words.map(word => {
      const lowercaseWord = word.toLowerCase()
      return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1)
    })
    return capitalizedWords.join(' ')
  }

  useEffect(() => {
    FetchCategoryById(id, setCategory)
    //eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (category) {
      FetchSubcategories(category.id, setSubcategories)
    }
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedSubcategory(category.subcategories[0])
    }
    //eslint-disable-next-line
  }, [category])

  useEffect(() => {
    fetchProducts(
      ({ products, pageCount }) => {
        setProducts(products)
        setPageCount(pageCount)
      },
      currentPage,
      15,
      selectedSubcategory.id,
    )
    //eslint-disable-next-line
  }, [selectedSubcategory])

  return (
    <>
      <MainLayout maxWidth="120rem">
        <Label>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </Label>
        <Container>
          <Subcategories>
            {subcategories
              ? subcategories.map(subcategory => (
                  <Subcategory
                    key={subcategory.id}
                    $selected={subcategory.id === selectedSubcategory.id}
                  >
                    <button onClick={() => setSelectedSubcategory(subcategory)}>
                      {textFormatter(subcategory.name)}
                    </button>
                  </Subcategory>
                ))
              : ''}
          </Subcategories>
          <CardContainer title={textFormatter(selectedSubcategory.name)}>
            {products.length > 0
              ? products.map(product => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    productImages={product.images}
                    id={product.id}
                  />
                ))
              : 'Não há produtos cadastrados nessa subcategoria'}
            {pageCount.length > 1 ? (
              <Pagination
                pageCount={pageCount}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              ''
            )}
          </CardContainer>
        </Container>
      </MainLayout>
    </>
  )
}

export { Category }
