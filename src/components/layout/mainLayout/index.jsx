import FooterComponent from '../../common/footer'
import Header from '../../common/header'
import { Container } from './styles'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <FooterComponent />
    </>
  )
}

export { MainLayout }
