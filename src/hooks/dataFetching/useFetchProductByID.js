import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchProductById = () => {
  const [error, setError] = useState(null)
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const FetchProductById = async (id, successCallback, errorCallback) => {
    try {
      const response = await api.get(`/products/${id}`)
      successCallback(response.data)
      setProduct(response.data)
    } catch (error) {
      setError(error)
      errorCallback(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { product, isLoading, error, FetchProductById }
}

export { useFetchProductById }
