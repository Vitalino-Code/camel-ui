import { Link } from 'react-router-dom'

import AuthLayout from '../../components/layout/authLayout'
import Input from '../../components/forms/Input'
import Button from '../../components/common/Button'

import logo from '../../assets/images/logo.png'
import { LuMail } from 'react-icons/lu'
import { BiLock } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

import { Fildset, InfoArea } from './styles'

function Login() {
  return (
    <AuthLayout>
      <InfoArea>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <h1>Faça seu login na plataforma</h1>
      </InfoArea>
      <Fildset>
        <form>
          <div>
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
