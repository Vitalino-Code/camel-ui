import api from '../../services/api'
import { toast } from 'react-toastify'

async function createUser(user, navigate) {
  try {
    await api.post('/users', user).then(_ => {
      toast.success('Usuário criado com sucesso')
      navigate('/login')
    })
  } catch (error) {
    if (error.response.data.message == 'Falha na requisição') {
      toast.warn(error.response.data.details[0].message)
    } else {
      toast.warn(error.response.data.message, { toastId: 'warnning' })
    }
    // console.log(error)
  }
}

export { createUser }
