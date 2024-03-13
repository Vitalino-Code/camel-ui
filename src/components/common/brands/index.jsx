import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Container, SwiperContainer } from './styles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// importando as imagens
import wegImage from '../../../assets/images/brands/weg.png'
import steckImage from '../../../assets/images/brands/stEck.png'
import schneiderImage from '../../../assets/images/brands/schneider.png'
import saveenergyImage from '../../../assets/images/brands/saveenergy.png'
import legrandImage from '../../../assets/images/brands/legrand.jpg'
import gmhtradeImage from '../../../assets/images/brands/gmhtrade.jpg'

// const Brands = () => {
//   const { brands, isLoading, error, fetchBrands } = useFetchBrands()

//   useEffect(() => {
//     fetchBrands()
//   }, [])

//   return (
//     <Container>
//       {isLoading && <p>Carregando marcas...</p>}
//       {error && <p>Ocorreu um erro ao carregar as marcas.</p>}
//       {!isLoading && !error && (
// <>

const Brands = () => {
  const data = [
    {
      id: '1',
      title: 'WEG',
      image: wegImage,
    },
    {
      id: '2',
      title: 'STECK',
      image: steckImage,
    },
    {
      id: '3',
      title: 'SCHNEIDER',
      image: schneiderImage,
    },
    {
      id: '4',
      title: 'SAVEENERGY',
      image: saveenergyImage,
    },
    {
      id: '5',
      title: 'LEGRAND',
      image: legrandImage,
    },
    {
      id: '6',
      title: 'GMHTRADE',
      image: gmhtradeImage,
    },
  ]

  return (
    <Container>
      <h2>Compre por Marca</h2>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={data.length < 3 ? data.length : 5}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={data.length >= 3}
          draggable={data.length >= 3}
          loop={data.length >= 3}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <a href="#">
                <img src={item.image} alt={`Logo da ${item.title}`} />
                <span>{item.title}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default Brands
