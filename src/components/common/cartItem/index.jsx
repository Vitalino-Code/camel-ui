import { FaTrashAlt } from 'react-icons/fa'
import { priceFormatter } from '../../../utils'

import {
  Available,
  Container,
  InfoContainer,
  Img,
  Name,
  Options,
  Price,
} from './styles'
import { useState } from 'react'

const CartItem = ({
  product,
  handleDelete,
  handleChangeQuantity,
  handleCheckChange,
  productImages,
}) => {
  const [imageUrl] = useState(productImages[0]?.src)

  return (
    <>
      <Container $fade={product.check}>
        <div>
          <label htmlFor="addItem">
            <input
              type="checkbox"
              name="addItem"
              id="addItem"
              checked={product.check}
              onChange={handleCheckChange}
              data-id={product.id}
            />
          </label>
        </div>
        {productImages[0] ? (
          <Img src={imageUrl} alt={name} />
        ) : (
          <Img src="" alt={'imagem: ' + product.name} />
        )}
        <InfoContainer>
          <div>
            <Name>{product.name}</Name>
            <p>Marca: {product.brand}</p>
            <Available $available={product.available}>
              {product.available ? 'Em estoque' : 'Indisponível'}
            </Available>
          </div>
          <Price>{priceFormatter(product.price, 'BRL')}</Price>
          <Options>
            <select
              name="quantity"
              id="quantity"
              value={product.quantity}
              onChange={handleChangeQuantity}
              data-id={product.id}
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
              {product.quantity > 9 ? (
                <option value={product.quantity}>{product.quantity}</option>
              ) : (
                ''
              )}
            </select>
            <span>|</span>
            <button onClick={() => handleDelete(product.id)}>
              Excluir <FaTrashAlt />
            </button>
          </Options>
        </InfoContainer>
      </Container>
    </>
  )
}

export { CartItem }
