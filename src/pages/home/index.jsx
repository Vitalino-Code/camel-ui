import Header from '../../components/common/header'
import FooterComponent from '../../components/common/footer/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
import { products } from '../../mock/produtos.js'
import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import Brands from '../../components/common/brands/index.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <CardContainer>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            productImage={product.image}
            id={product.id}
          />
        ))}
      </CardContainer>
      <Brands />
      <FooterComponent />
    </>
  )
}

export default Home
