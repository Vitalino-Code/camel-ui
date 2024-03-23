import { CardContainer } from '../../components/common/CardContainer/index.jsx'
import { MainLayout } from '../../components/layout/mainLayout/index.jsx'
import { ProductCard } from '../../components/common/Card/index.jsx'
import { products } from '../../mock/produtos.js'
import { brands } from '../../mock/brands.js'
import { categories } from '../../mock/categories.js'
import SwiperSlider from '../../components/common/SwiperSlider/index.jsx'

const Home = () => {
  return (
    <>
      <MainLayout>
        <SwiperSlider slides={categories} />
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
        <SwiperSlider slides={brands} />
      </MainLayout>
    </>
  )
}

export default Home
