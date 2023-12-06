import api from '../../services/api'
import { toast } from 'react-toastify'

async function createSession(user, navigate) {
  try {
    await api.post('/sessions', user).then(_ => {
      toast.success('Bem vindo!')
      navigate('/')
    })
  } catch (error) {
    toast.warn(error.response.data.message, { toastId: 'warnning' })
  }
}

export { createSession }
