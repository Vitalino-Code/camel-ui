import { useState } from 'react'
import { api } from '../../services/api'

const useFetchRelatedProducts = () => {
  const [error, setError] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const FetchRelatedProducts = async (
    mainProductId,
    recommendationType,
    successCallback,
  ) => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/products/${mainProductId}/recommendations?type=${recommendationType}`,
      )
      setRelatedProducts(response.data)
      successCallback(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { error, relatedProducts, isLoading, FetchRelatedProducts }
}

export { useFetchRelatedProducts }
