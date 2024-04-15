import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchProducts = () => {
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = async (
    successCallback,
    page,
    perPage = 15,
    subcategoryID,
  ) => {
    const offset = page * perPage
    const queryParams = [`limit=${perPage}`, `offset=${offset}`]

    if (subcategoryID) {
      queryParams.push(`subcategoryID=${subcategoryID}`)
    }

    const queryString = queryParams.join('&')

    try {
      setIsLoading(true)
      const response = await api.get(`/products?${queryString}`)
      const { data } = response
      const pageCount = Math.ceil(response.headers['x-count'] / perPage)
      setProducts(data)
      console.log(data)
      successCallback({ products: data, pageCount })
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { products, isLoading, error, fetchProducts }
}

export { useFetchProducts }
