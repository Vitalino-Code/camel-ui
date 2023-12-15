import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'
import AuthLayout from '../../components/layout/authLayout'

import { LuMail } from 'react-icons/lu'
import { BiLock } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

import logo from '../../assets/images/logo.png'

import { Fieldset, InfoArea } from './styles'

import { useSignIn } from '../../hooks/auth/useSignIn'

const SignIn = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const { signIn, isLoading } = useSignIn()

  const handleError = error => {
    if (error) {
      if (error.response) {
        return toast.error(error.response.data.message)
      } else {
        return toast.error('Não foi possível entrar na sua conta.')
      }
    }
  }

  const handleSuccess = () => {
    toast.success('Seja bem-vindo(a)! 🥳')

    navigate('/')
  }

  const handleInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSignIn = async event => {
    event.preventDefault()
    await signIn(user, handleSuccess, handleError)
  }

  return (
    <AuthLayout>
      <InfoArea>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <h1>Faça seu login na plataforma</h1>
      </InfoArea>

      <Fieldset>
        <form onSubmit={handleSignIn}>
          <div>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
              autoComplete="off"
              icon={LuMail}
              required
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

            <Link to={'/'}>Esqueci minha senha</Link>
          </div>

          <Button text="Cadastrar" disabled={isLoading} />
        </form>

        <p>
          Não tem uma conta? <Link to={'/signup'}>Registre-se</Link>
        </p>

        <div>
          Ou entre com{' '}
          <Link to={'/'}>
            <FaGoogle />
          </Link>{' '}
          <Link to={'/'}>
            <FaFacebook />
          </Link>
        </div>
      </Fieldset>
    </AuthLayout>
  )
}

export { SignIn }
