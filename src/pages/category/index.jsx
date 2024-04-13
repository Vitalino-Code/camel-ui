import { useParams } from 'react-router-dom'
import { MainLayout } from '../../components/layout/mainLayout'

import { Container, Label, Subcategories, Subcategory } from './styles'
import { useEffect, useState } from 'react'
import { useFetchCategoryById } from '../../hooks/dataFetching/useFetchCategoryByID'
import { CardContainer } from '../../components/common/CardContainer'
import { ProductCard } from '../../components/common/Card'

import { products } from '../../mock/produtos.js'

const Category = () => {
  const { id } = useParams()
  const [category, setCategory] = useState({})
  const { FetchCategoryById } = useFetchCategoryById()
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

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
    if (category.subcategories && category.subcategories.length > 0) {
      setSelectedSubcategory(category.subcategories[0])
    }
  }, [category])

  return (
    <>
      <MainLayout maxWidth="120rem">
        <Label>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </Label>
        <Container>
          <Subcategories>
            {category.subcategories
              ? category.subcategories.map(subcategory => (
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
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                productImages={product.image}
                id={product.id}
              />
            ))}
          </CardContainer>
        </Container>
      </MainLayout>
    </>
  )
}

export { Category }
