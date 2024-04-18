import { useState } from 'react'

import { useAuth } from '../../contexts/authContext'

const useSignOut = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { logout } = useAuth()

  const signOut = async (successCallback, errorCallback) => {
    setIsLoading(true)

    try {
      await logout()
      localStorage.removeItem('cart')
      successCallback()
    } catch (error) {
      setError(error)
      errorCallback(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, signOut }
}

export { useSignOut }
