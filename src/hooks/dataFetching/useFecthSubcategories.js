import { useState } from 'react'
import { api } from '../../services/api'

const useFetchSubcategories = () => {
  const [error, setError] = useState(null)
  const [subcategories, setSubcategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const FetchSubcategories = async (categoryId, successCallback) => {
    try {
      setIsLoading(true)
      const response = await api.get(`/categories/${categoryId}`)
      setSubcategories(response.data.subcategories)
      successCallback(response.data.subcategories)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { subcategories, isLoading, error, FetchSubcategories }
}

export { useFetchSubcategories }
