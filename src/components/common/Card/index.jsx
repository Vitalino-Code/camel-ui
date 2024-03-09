import { priceFormatter } from '../../../utils'

import { Link } from 'react-router-dom'
import {
  ProductContainer,
  ImageContainer,
  ProductName,
  ProductPrice,
  ProductImage,
} from './styles'

export const ProductCard = ({ name, price, productImage, id }) => {
  return (
    <div>
      <Link to={`/produto/${id}`}>
        <ProductContainer>
          <ImageContainer>
            <ProductImage src={productImage} alt={name} />
          </ImageContainer>

          <ProductName>
            <h2>{name}</h2>
          </ProductName>

          <ProductPrice>{priceFormatter(price, 'BRL')}</ProductPrice>
        </ProductContainer>
      </Link>
    </div>
  )
}
