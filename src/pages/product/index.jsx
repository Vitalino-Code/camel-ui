import { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { priceFormatter } from '../../utils'
import { useFetchProductById } from '../../hooks/dataFetching/useFetchProductByID'
import { Carousel } from '../../components/common/carousel'

// import { relatedProducts } from '../../mock/relatedProducts.js'
// import SwiperSlider from '../../components/common/SwiperSlider/index.jsx'

import {
  InfoArea,
  ProdArea,
  ProdName,
  SelectionArea,
  Slides,
  MoreInfoArea,
  ArrowIcon,
} from './styles'

const Product = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState({})
  const [images, setImages] = useState([])
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const { FetchProductById } = useFetchProductById()
  const navigate = useNavigate()
  const moreInfoRef = useRef()

  //Manages the display of product display errors
  const handleError = error => {
    if (error) {
      if (error.response) {
        if (error.response.data.message === 'Falha na requisição') {
          toast.warn(error.response.data.details[0].message, {
            toastId: 'warnning',
          })
        } else {
          toast.warn(error.response.data.message, { toastId: 'warnning' })
        }
        navigate('/')
      } else {
        navigate('/')
        return toast.error('Produto não encontrado', { toastId: 'warnning' })
      }
    }
  }

  //Upload product information
  useEffect(() => {
    FetchProductById(id, setItem, handleError)
    //eslint-disable-next-line
  }, [id])

  useEffect(() => {
    const imagesUrls = []
    if (item.images) {
      item.images.map(image => {
        imagesUrls.push(image.src)
      })
    }
    setImages(imagesUrls)
  }, [item])

  //Add the product to the shopping cart
  const addToCart = () => {
    if (localStorage.getItem('user')) {
      if (item.available) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
          let hasTheProduct = cart.some(product => product.id === id)
          cart = hasTheProduct
            ? cart.map(product =>
                product.id === id
                  ? (product = {
                      ...item,
                      quantity: +product.quantity + +quantity,
                    })
                  : product,
              )
            : [...cart, { ...item, quantity }]
        } else {
          cart = [{ ...item, quantity }]
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Produto adicionado ao carrinho', { toastId: 'success' })
      } else {
        toast.warn('Produto indisponível', { toastId: 'unavailable' })
      }
    } else {
      navigate('/login')
      return toast.warn('Faça login para adicionar produtos ao carrinho', {
        toastId: 'area restrita',
      })
    }
  }

  const toggleMoreInfo = () => {
    setShowMoreInfo(prevState => !prevState)
  }

  return (
    <>
      <MainLayout>
        <ProdArea>
          <ProdName>
            <h1>{item.name}</h1>
            <hr />
          </ProdName>
          <Slides>
            <Carousel slides={images} />
          </Slides>
          <InfoArea>
            <p>{item.description}</p>
            <a
              href="#moreInfo"
              onClick={e => {
                e.preventDefault()
                moreInfoRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Mais informações
            </a>
            <hr />
          </InfoArea>
          <SelectionArea>
            <p>{priceFormatter(item.price, 'BRL')}</p>
            <div>
              <div>
                <label htmlFor="quantity">Quantidade</label>
                <select
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <button onClick={addToCart}>Adicionar ao carrinho</button>
            </div>
          </SelectionArea>
        </ProdArea>
        <MoreInfoArea id="moreInfo" ref={moreInfoRef}>
          <button onClick={() => toggleMoreInfo(prevState => !prevState)}>
            <ArrowIcon showMoreInfo={showMoreInfo} />
            Informações do Produto
          </button>
          {showMoreInfo && <p>{item.description}</p>}
        </MoreInfoArea>
        {/* <SwiperSlider slides={relatedProducts} /> */}
      </MainLayout>
    </>
  )
}

export { Product }
