import { ProductContainer, Title, Container } from './styles'
export const CardContainer = ({ children }) => {
  return (
    <Container>
      <Title>Produtos em Destaque</Title>
      <ProductContainer>{children}</ProductContainer>
    </Container>
  )
}
