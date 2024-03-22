import SwiperSlider from '../SwiperSlider/index.jsx'

// importando as imagens
import fiosCabos from '../../../assets/images/categories/fiosCabos.png'
import iluminacao from '../../../assets/images/categories/iluminacao.png'
import seguranca from '../../../assets/images/categories/seguranca.png'
import tomadasInterruptores from '../../../assets/images/categories/tomadasInterruptores.png'
import tubosConexoes from '../../../assets/images/categories/tubosConexoes.png'

const Categories = () => {
  const data = [
    {
      id: '1',
      title: 'Fios e Cabos',
      image: fiosCabos,
    },
    {
      id: '2',
      title: 'Iluminação',
      image: iluminacao,
    },
    {
      id: '3',
      title: 'Segurança',
      image: seguranca,
    },
    {
      id: '4',
      title: 'Tomadas e Interruptores',
      image: tomadasInterruptores,
    },
    {
      id: '5',
      title: 'Tubos e Conexôes',
      image: tubosConexoes,
    },
  ]

  return (
    <div>
      <SwiperSlider slides={data} />
    </div>
  )
}

export default Categories
