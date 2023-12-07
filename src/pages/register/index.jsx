import { Link, useNavigate } from 'react-router-dom'

import { createUser } from './register.dao'

import AuthLayout from '../../components/layout/authLayout'
import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'

import logo from '../../assets/images/logo.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { BiUser, BiLock } from 'react-icons/bi'
import { LuMail } from 'react-icons/lu'

import { Fildset, InfoArea } from './styles'
import { useState } from 'react'

function Register() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    createUser(user, navigate)
  }

  return (
    <>
      <AuthLayout reverse>
        <Fildset>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                autoComplete="off"
                required
                icon={BiUser}
                handleChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Seu e-mail"
                autoComplete="off"
                required
                icon={LuMail}
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
              <Input
                type="password"
                name="confirmedPassword"
                id="confirmedPassword"
                placeholder="Confirme sua senha"
                icon={BiLock}
                required
                handleChange={handleChange}
              />
            </div>
            <Button text="Cadastrar" />
          </form>
        </Fildset>
        <InfoArea>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
          <h1>Melhor distribuidora da região</h1>
          <h3>Material elétrico com o melhor preço, é na Camel</h3>
          <Link to={'/login'}>
            <FaArrowLeftLong /> Voltar para o login
          </Link>
        </InfoArea>
      </AuthLayout>
    </>
  )
}

export default Register
