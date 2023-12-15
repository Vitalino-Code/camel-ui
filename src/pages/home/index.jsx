import { Link } from 'react-router-dom'
import Header from '../../components/common/header'

import { Management } from './styles'

const Home = () => {
  return (
    <>
      <Header />

      <p
        style={{
          color: 'black',
          textAlign: 'center',
          marginTop: '25rem',
          fontSize: '2rem',
        }}
      >
        🚧 Página em Desenvolvimento... 🚧
      </p>
      <Management>
        <Link to={'/user-management'}>Gerenciamento de usuários</Link>
      </Management>
    </>
  )
}

export default Home
