import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchCategoryById = () => {
  const [error, setError] = useState(null)
  const [category, setCategory] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const FetchCategoryById = async (id, successCallback, errorCallback) => {
    try {
      const response = await api.get(`/categories/${id}`)
      successCallback(response.data)
      setCategory(response.data)
    } catch (error) {
      setError(error)
      errorCallback(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { category, isLoading, error, FetchCategoryById }
}

export { useFetchCategoryById }
