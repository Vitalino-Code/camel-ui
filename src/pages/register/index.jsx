import Input from '../../components/forms/Input'

import { FiMail } from 'react-icons/fi'

function Register() {
  return (
    <>
      <h1>Registro teste</h1>
      <br />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Sua senha"
        icon={FiMail}
      />
    </>
  )
}

export default Register
