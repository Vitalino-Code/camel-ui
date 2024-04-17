import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { CardContainer } from '../../components/common/CardContainer'
import { MainLayout } from '../../components/layout/mainLayout'
import { NotFound } from './styles.js'
import { ProductCard } from '../../components/common/Card'
import { useFetchProducts } from '../../hooks/dataFetching/useFetchProducts'

import Pagination from '../../components/common/pagination/index.jsx'

const SearchResult = () => {
  const navigate = useNavigate()

  const { fetchProducts } = useFetchProducts()
  const { searchParam } = useParams()

  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts(
      ({ products, pageCount }) => {
        setProducts(products)
        setPageCount(pageCount)
      },
      currentPage,
      15,
      '',
      searchParam,
    )
    //eslint-disable-next-line
  }, [currentPage, searchParam])

  return (
    <>
      <MainLayout>
        {products.length > 0 ? (
          <CardContainer title={'Resultado da busca'}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                productImages={product.images}
                id={product.id}
              />
            ))}
            {pageCount > 1 ? (
              <Pagination
                pageCount={pageCount}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              ''
            )}
          </CardContainer>
        ) : (
          <NotFound>
            <h2>Desculpe, não encontramos esse produto &#x1F613;</h2>
            <p>
              Confira se o nome do produto está correto. Se estiver tudo certo,
              o produto pode não estar mais disponível.
            </p>
            <button onClick={() => navigate('/')}>
              Ir para a página inicial
            </button>
          </NotFound>
        )}
      </MainLayout>
    </>
  )
}

export { SearchResult }
