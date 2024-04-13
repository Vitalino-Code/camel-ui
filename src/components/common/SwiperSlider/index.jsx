import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Container, SwiperContainer } from './styles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperSlider = ({ slides }) => {
  return (
    <Container>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slides.length < 3 ? slides.length : 1}
          breakpoints={{
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
              <a href="#">
                <img src={item.image} alt={`Logo da ${item.title}`} />
                {item.name ? (
                  <>
                    <span>{item.name}</span>
                    <span className="discount">{item.discount}</span>
                    <span className="price">{item.price}</span>
                  </>
                ) : (
                  <span>{item.title}</span>
                )}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default SwiperSlider
