import React from 'react'
import { ProductContainer, Title, Container } from './styles'
export const CardContainer = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>
        {React.Children.toArray(children).slice(0, -1)}
      </ProductContainer>
      {children[children.length - 1]}
    </Container>
  )
}
