
import React from 'react'

import AuthLayout from '../../components/layout/authLayout'
import Input from '../../components/forms/Input/index'

import { FiMail } from 'react-icons/fi'


function Register() {
  return (
    <>

      <AuthLayout>
        <h1>Componente 1</h1>
        <h1>Componente 2</h1>
      </AuthLayout>

      <h1>Registro teste</h1>
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
