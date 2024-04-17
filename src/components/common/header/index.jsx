import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../Button'
import { useFetchCategories } from '../../../hooks/dataFetching/useFetchCategories'
import { useFetchProducts } from '../../../hooks/dataFetching/useFetchProducts'

import { FaUser } from 'react-icons/fa'
import { IoExit } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { IoMdSearch } from 'react-icons/io'
// import { PiUserList } from 'react-icons/pi'
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
  SearchButton,
  SeachResults,
} from './styles'

import { useSignOut } from '../../../hooks/auth/useSignOut'

import { useAuth } from '../../../contexts/authContext'

const Header = () => {
  const navigate = useNavigate()
  const { signOut } = useSignOut()
  const { user } = useAuth()

  const [categories, setCategories] = useState([])
  const [showUserArea, setShowUserArea] = useState(false)
  const [showToggleCategories, setShowToggleCategories] = useState(false)
  const [searchParam, setSearchParam] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showSearchResult, setShowSearchResult] = useState(false)

  const fetchCategories = useFetchCategories().fetchCategories
  const fetchProducts = useFetchProducts().fetchProducts

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
    fetchCategories(setCategories)
    // eslint-disable-next-line
  }, [setCategories])

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

  useEffect(() => {
    fetchProducts(setSearchResult, 0, 10, '', searchParam)
    //eslint-disable-next-line
  }, [searchParam])

  const changeSearchDisplay = status => {
    if (status) {
      setShowSearchResult(true)
    } else {
      const timer = setTimeout(() => {
        setShowSearchResult(false)
      }, 200) // 300ms de atraso antes de ocultar o componente
      return () => clearTimeout(timer)
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      navigate(`/busca/${searchParam}`)
    }
  }

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
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/categoria/${category.id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </ToggleCategories>

          <LockScreen
            $show={showToggleCategories}
            onClick={() => setShowToggleCategories(false)}
          ></LockScreen>

          <FixedCategories>
            {categories.slice(0, 6).map(category => (
              <li key={category.id}>
                <Link to={`/categoria/${category.id}`}>{category.name}</Link>
              </li>
            ))}
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
              {/* <li>
                <Link to={'/profile'}>
                  <PiUserList size={22} />
                  <p>Meu Perfil</p>
                </Link>
              </li> */}
              <li>
                <Link to={'/carrinho'}>
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
        <input
          type="search"
          placeholder="Procure na Camel"
          value={searchParam}
          onChange={e => setSearchParam(e.target.value)}
          onFocus={() => changeSearchDisplay(true)}
          onBlur={() => changeSearchDisplay(false)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={() => navigate(`/busca/${searchParam}`)}>
          <IoMdSearch size={18} />
        </SearchButton>
        <SeachResults $showSearchResult={showSearchResult && searchParam}>
          {searchResult.products && searchResult.products.length > 0 ? (
            searchResult.products.map(produto => (
              <Link to={`/produto/${produto.id}`} key={produto.id}>
                {produto.name}
              </Link>
            ))
          ) : (
            <span>Desculpe, não encontramos esse produto</span>
          )}
        </SeachResults>
      </SearchBar>
    </Container>
  )
}

export default Header
