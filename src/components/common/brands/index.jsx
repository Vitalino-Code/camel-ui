import SwiperSlider from '../SwiperSlider/index.jsx'

// importando as imagens
import wegImage from '../../../assets/images/brands/weg.png'
import steckImage from '../../../assets/images/brands/steck.png'
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
    <div>
      <SwiperSlider slides={data} />
    </div>
  )
}

export default Brands
