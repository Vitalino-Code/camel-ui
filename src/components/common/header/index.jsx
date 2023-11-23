import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

import logo from '../../../assets/images/logo.png'
import { PiUserList } from 'react-icons/pi'
import { TiShoppingCart } from 'react-icons/ti'
import { IoExit } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

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

function Header() {
  const [showToggleCategories, setShowToggleCategories] = useState(false)
  const [showUserArea, setShowUserArea] = useState(false)

  useEffect(() => {
    if (showToggleCategories) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      window.setTimeout(() => {
        document.documentElement.style.overflowY = 'auto'
      }, 200)
    }
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
                <Link to={'/'}>Teste A</Link>
              </li>
              <li>
                <Link to={'/'}>Teste B</Link>
              </li>
              <li>
                <Link to={'/'}>Teste C</Link>
              </li>
              <li>
                <Link to={'/'}>Teste D</Link>
              </li>
              <li>
                <Link to={'/'}>Teste A</Link>
              </li>
              <li>
                <Link to={'/'}>Teste B</Link>
              </li>
              <li>
                <Link to={'/'}>Teste C</Link>
              </li>
              <li>
                <Link to={'/'}>Teste D</Link>
              </li>
            </ul>
          </ToggleCategories>
          <LockScreen $show={showToggleCategories}></LockScreen>
          <FixedCategories>
            <li>
              <Link to={'/'}>Teste A</Link>
            </li>
            <li>
              <Link to={'/'}>Teste B</Link>
            </li>
            <li>
              <Link to={'/'}>Teste C</Link>
            </li>
            <li>
              <Link to={'/'}>Teste D</Link>
            </li>
            <li>
              <Link to={'/'}>Teste E</Link>
            </li>
            <li>
              <Link to={'/'}>Teste F</Link>
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
          <ul>
            <li>
              <Link>
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
              <Link>
                <IoExit size={22} />
                <p>Sair da Conta</p>
              </Link>
            </li>
          </ul>
          <Button text="Entrar" />
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
