import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import AuthLayout from '../../components/layout/authLayout'
import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'

import logo from '../../assets/images/logo.png'
import { LuMail } from 'react-icons/lu'
import { BiLock } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

import { Fildset, InfoArea } from './styles'
import { createSession } from './login.dao'

function Login() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    createSession(user, navigate)
  }
  return (
    <AuthLayout>
      <InfoArea>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <h1>Faça seu login na plataforma</h1>
      </InfoArea>
      <Fildset>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
              autoComplete="off"
              icon={LuMail}
              required
              handleChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              icon={BiLock}
              required
              handleChange={handleChange}
            />
            <Link to={'/'}>Esqueci minha senha</Link>
          </div>
          <Button text="Entrar" />
        </form>
        <p>
          Não tem uma conta? <Link to={'/register'}>Registre-se</Link>
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
      </Fildset>
    </AuthLayout>
  )
}

export default Login
