import { priceFormatter } from '../../../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import {
  ProductContainer,
  ImageContainer,
  ProductName,
  ProductPrice,
  ProductImage,
} from './styles'

export const ProductCard = ({ name, price, productImages, id }) => {
  const [imageUrl] = useState(productImages[0]?.src)

  return (
    <div>
      <Link to={`/produto/${id}`}>
        <ProductContainer>
          <ImageContainer>
            {productImages[0] ? (
              <ProductImage src={imageUrl} alt={name} />
            ) : (
              <ProductImage src="" alt={'imagem: ' + name} />
            )}
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
