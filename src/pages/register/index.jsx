import { Link } from 'react-router-dom'

import AuthLayout from '../../components/layout/authLayout'
import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'

import logo from '../../assets/images/logo.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { BiUser, BiLock } from 'react-icons/bi'
import { LuMail } from 'react-icons/lu'

import { Fildset, InfoArea } from './styles'

function Register() {
  return (
    <>
      <AuthLayout reverse>
        <Fildset>
          <h2>Crie sua conta</h2>
          <form>
            <div>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                autoComplete="off"
                icon={BiUser}
              />
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Seu e-mail"
                autoComplete="off"
                icon={LuMail}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Sua senha"
                icon={BiLock}
              />
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                icon={BiLock}
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
