import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Container, SwiperContainer } from './styles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProductCard } from '../../../components/common/Card/index.jsx'

const SwiperSlider = ({ slides, title, type = 'categoria' }) => {
  return (
    <Container type={type}>
      <h1>{title}</h1>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            575: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          navigation={slides.length >= 3}
          draggable={slides.length >= 3}
          loop={slides.length >= 3}
        >
          {slides.map(item => (
            <SwiperSlide key={item.id}>
              {type === 'produto' ? (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  productImages={item.images}
                  id={item.id}
                />
              ) : (
                <a href={`categoria/${item.id}`}>
                  {item.images[0] && (
                    <img
                      src={item.images[0].src}
                      alt={`Logo da ${item.name}`}
                    />
                  )}
                  <span>{item.name}</span>
                </a>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default SwiperSlider
