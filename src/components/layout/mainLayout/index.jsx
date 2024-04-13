import FooterComponent from '../../common/footer'
import Header from '../../common/header'
import { Container } from './styles'

const MainLayout = ({ children, maxWidth }) => {
  return (
    <>
      <Header />
      <Container $maxWidth={maxWidth}>{children}</Container>
      <FooterComponent />
    </>
  )
}

export { MainLayout }
