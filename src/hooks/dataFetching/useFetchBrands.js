import { useState } from 'react'
import { api } from '../../services/api.js'

const useFetchBrands = () => {
  const [error, setError] = useState(null)
  const [brands, setBrands] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchBrands = async successCallback => {
    try {
      setIsLoading(true)
      const response = await api.get(`/categories`)
      setBrands(response.data)
      successCallback(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { brands, isLoading, error, fetchBrands }
}

export { useFetchBrands }
