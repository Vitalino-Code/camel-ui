import { api } from '../../services/api'
import { useState } from 'react'

const useCreateOrder = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const createOrder = async (order, successCallback, errorCallback) => {
    setIsLoading(true)

    try {
      const response = await api.post('/orders', order)
      if (successCallback) {
        successCallback(response)
      }
    } catch (error) {
      setError(error)
      if (errorCallback) {
        errorCallback(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, createOrder }
}

export { useCreateOrder }
