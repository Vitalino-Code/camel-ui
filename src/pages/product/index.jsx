import { Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useFetchProductById } from '../../hooks/dataFetching/useFetchProductByID'
import { Carousel } from '../../components/common/carousel'
import Header from '../../components/common/header'

import {
  Body,
  InfoArea,
  ProdArea,
  ProdName,
  SelectionArea,
  Slides,
} from './styles'

const imgBaseUrl = '../src/assets/images'

const images = [
  `${imgBaseUrl}/img1.jpg`,
  `${imgBaseUrl}/img2.jpg`,
  `${imgBaseUrl}/img3.jpg`,
  `${imgBaseUrl}/img4.jpg`,
  `${imgBaseUrl}/img5.jpg`,
]

const Product = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const { FetchProductById } = useFetchProductById()
  const navigate = useNavigate()

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

  useEffect(() => {
    FetchProductById(id, setItem, handleError)
    //eslint-disable-next-line
  }, [id])

  const handleSubmit = values => {
    //eslint-disable-next-line
    console.log(values.quantity)
  }

  return (
    <>
      <Header />
      <Body>
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
            {/* <a>Mais informações</a> */}
            <hr />
          </InfoArea>
          <SelectionArea>
            <p>R$ {item.price}</p>
            <Formik initialValues={{ quantity: 1 }} onSubmit={handleSubmit}>
              <Form>
                <div>
                  <label htmlFor="quantity">Quantidade</label>
                  <Field as="select" name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Field>
                </div>
                <button type="submit">Adicionar ao carrinho</button>
              </Form>
            </Formik>
          </SelectionArea>
        </ProdArea>
      </Body>
    </>
  )
}

export { Product }
