import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

// eslint-disable-next-line
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const login = async formData => {
    const response = await api.post('/sessions', formData)
    const { user, token } = response.data

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(token))

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({ user, token })
  }

  const logout = async () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    setData({})
  }

  //carrega os dados da sessão caso o usuário reabra a página
  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearrer ${token}`
    }

    setData({
      user: JSON.parse(user),
      token: token,
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
