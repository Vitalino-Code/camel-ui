import Header from '../../components/common/header'

import { ProductCard } from '../../components/common/Card/index.jsx'
import { products } from '../../mock/produtos.js'
import { CardContainer } from '../../components/common/CardContainer/index.jsx'

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
    </>
  )
}

export default Home
