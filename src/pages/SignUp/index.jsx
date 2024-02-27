import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'
import AuthLayout from '../../components/layout/authLayout'

import { LuMail } from 'react-icons/lu'
import { BiUser, BiLock } from 'react-icons/bi'
import { FaArrowLeftLong } from 'react-icons/fa6'

import logo from '../../assets/images/logo.png'

import { Fieldset, InfoArea } from './styles'

import { useCreateUser } from '../../hooks/dataCreating/useCreateUser'

const SignUp = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const { isLoading, createUser } = useCreateUser()

  const handleError = error => {
    if (error) {
      if (error.response) {
        if (error.response.data.message === 'Falha na requisição') {
          toast.warn(error.response.data.details[0].message)
        } else {
          toast.warn(error.response.data.message, { toastId: 'warnning' })
        }
      } else {
        return toast.error('Não foi possível criar sua conta.')
      }
    }
  }

  const handleSuccess = () => {
    setUser({})

    toast.success('Sua conta foi criada com sucesso!')

    navigate('/login')
  }

  const handleInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSignUp = async event => {
    event.preventDefault()
    await createUser(user, handleSuccess, handleError)
  }

  return (
    <>
      <AuthLayout reverse>
        <Fieldset>
          <h2>Crie sua conta</h2>

          <form onSubmit={handleSignUp}>
            <div>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                autoComplete="off"
                required
                icon={BiUser}
                handleChange={handleInputChange}
                value={user.name}
              />

              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Seu e-mail"
                autoComplete="off"
                required
                icon={LuMail}
                handleChange={handleInputChange}
                value={user.email}
              />

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Sua senha"
                icon={BiLock}
                required
                handleChange={handleInputChange}
                value={user.password}
              />

              <Input
                type="password"
                name="confirmedPassword"
                id="confirmedPassword"
                placeholder="Confirme sua senha"
                icon={BiLock}
                required
                handleChange={handleInputChange}
                value={user.confirmedPassword}
              />
            </div>

            <Button text="Cadastrar" disabled={isLoading} />
          </form>
        </Fieldset>

        <InfoArea>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>

          <h1>Melhor distribuidora da região</h1>
          <h3>Material elétrico com o melhor preço, é na Camel</h3>

          <Link to={-1}>
            <FaArrowLeftLong /> Voltar para o login
          </Link>
        </InfoArea>
      </AuthLayout>
    </>
  )
}

export { SignUp }
