import { useState } from 'react'
import { api } from '../../services/api'

const useFetchRelatedProducts = () => {
  const [error, setError] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const FecthRelatedProducts = async (mainProductId, successCallback) => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/products/${mainProductId}/recommendations`,
      )
      setRelatedProducts(response.data)
      successCallback(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { error, relatedProducts, isLoading, FecthRelatedProducts }
}

export { useFetchRelatedProducts }
