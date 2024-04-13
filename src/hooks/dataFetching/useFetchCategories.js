import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchCategories = () => {
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async successCallback => {
    try {
      setIsLoading(true)
      const response = await api.get(`/categories?limit=50`)
      setCategories(response.data)
      successCallback(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { categories, isLoading, error, fetchCategories }
}

export { useFetchCategories }
