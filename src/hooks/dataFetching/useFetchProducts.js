import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchProducts = () => {
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = async (successCallback, page, perPage = 15) => {
    const offset = page * perPage

    try {
      setIsLoading(true)
      const response = await api.get(
        `/products?limit=${perPage}&offset=${offset}`,
      )
      const { data } = response
      const pageCount = Math.ceil(response.headers['x-count'] / perPage)
      setProducts(data)
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
