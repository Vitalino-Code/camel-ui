import { ProductContainer, Title, Container } from './styles'
export const CardContainer = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>{children}</ProductContainer>
    </Container>
  )
}
