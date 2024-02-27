import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../Button'

import { FaUser } from 'react-icons/fa'
import { IoExit } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { IoMdSearch } from 'react-icons/io'
import { PiUserList } from 'react-icons/pi'
import { TiShoppingCart } from 'react-icons/ti'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

import logo from '../../../assets/images/logo.png'

import {
  Container,
  Categories,
  ToggleCategories,
  LockScreen,
  FixedCategories,
  Logo,
  UserButton,
  UserArea,
  SearchBar,
} from './styles'

import { useSignOut } from '../../../hooks/auth/useSignOut'

import { useAuth } from '../../../contexts/authContext'

const Header = () => {
  const navigate = useNavigate()

  const [showUserArea, setShowUserArea] = useState(false)
  const [showToggleCategories, setShowToggleCategories] = useState(false)

  const { signOut } = useSignOut()

  const { user } = useAuth()

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
    toast('Até logo! 🥺', {
      progressStyle: {
        background: '#f08605',
      },
    })

    navigate('/')
  }

  const handleSignOut = async event => {
    event.preventDefault()

    const checkConfirm = confirm('Tem certeza que deseja sair da sua conta?')

    if (checkConfirm) {
      await signOut(handleSuccess, handleError)
    }
  }

  const handleSignIn = () => {
    navigate('/login')
  }

  useEffect(() => {
    if (showToggleCategories) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      window.setTimeout(() => {
        document.documentElement.style.overflowY = 'auto'
      }, 200)
    }

    // setUserData
  }, [showToggleCategories])

  return (
    <Container>
      <Categories>
        <button
          onClick={() => {
            setShowToggleCategories(!showToggleCategories)
            setShowUserArea(false)
          }}
        >
          <HiOutlineMenuAlt2 size={30} /> <p>Todos</p>
        </button>

        <nav>
          <ToggleCategories $show={showToggleCategories}>
            <button onClick={() => setShowToggleCategories(false)}>
              <IoClose size={22} />
            </button>

            <ul>
              <li>
                <Link to={'/'}>Fios e Cabos</Link>
              </li>
              <li>
                <Link to={'/'}>Iluminação</Link>
              </li>
              <li>
                <Link to={'/'}>Segurança</Link>
              </li>
              <li>
                <Link to={'/'}>Tomadas e Interruptores</Link>
              </li>
              <li>
                <Link to={'/'}>Tubos e Conexões</Link>
              </li>
              <li>
                <Link to={'/'}>Ferramentas e Ferragens</Link>
              </li>
              <li>
                <Link to={'/'}>Disjuntores</Link>
              </li>
            </ul>
          </ToggleCategories>

          <LockScreen
            $show={showToggleCategories}
            onClick={() => setShowToggleCategories(false)}
          ></LockScreen>

          <FixedCategories>
            <li>
              <Link to={'/'}>Fios e Cabos</Link>
            </li>
            <li>
              <Link to={'/'}>Iluminação</Link>
            </li>
            <li>
              <Link to={'/'}>Segurança</Link>
            </li>
            <li>
              <Link to={'/'}>Tomadas e Interruptores</Link>
            </li>
            <li>
              <Link to={'/'}>Tubos e Conexões</Link>
            </li>
            <li>
              <Link to={'/'}>Ferramentas e Ferragens</Link>
            </li>
          </FixedCategories>
        </nav>
      </Categories>

      <Logo>
        <Link to="/">
          <img src={logo} alt="Logo da Camel" />
        </Link>
      </Logo>

      <UserButton>
        <button
          onClick={() => {
            setShowUserArea(!showUserArea)
            setShowToggleCategories(false)
          }}
        >
          <FaUser size={24} />
        </button>

        <UserArea $show={showUserArea}>
          <div></div>

          {user && (
            <ul>
              <li>
                <Link to={'/profile'}>
                  <PiUserList size={22} />
                  <p>Meu Perfil</p>
                </Link>
              </li>
              <li>
                <Link>
                  <TiShoppingCart size={22} />
                  <p>Meu Carrinho</p>
                </Link>
              </li>
              <li>
                <Link onClick={handleSignOut}>
                  <IoExit size={22} />
                  <p>Sair da Conta</p>
                </Link>
              </li>
            </ul>
          )}

          {!user && <Button onClick={handleSignIn} text="Entrar" />}
        </UserArea>
      </UserButton>

      <SearchBar>
        <input type="search" placeholder="Procure na Camel" />
        <IoMdSearch size={18} />
      </SearchBar>
    </Container>
  )
}

export default Header
