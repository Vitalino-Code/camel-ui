import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'

const useSession = _ => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const createSession = async user => {
    try {
      await login(user).then(_ => {
        toast.success('Bem vindo!')
        navigate('/')
      })
    } catch (error) {
      toast.warn(error.response.data.message, { toastId: 'warnning' })
    }
  }

  return { createSession }
}

export { useSession }
