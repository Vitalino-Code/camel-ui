import React from 'react'

import Input from '../../components/forms/Input/index'

import { ReactComponent as Mail } from '../../assets/icons/mail.svg'

function Register() {
  return (
    <>
      <h1>Registro "teste"</h1>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Sua senha">
        <Mail />
      </Input>
    </>
  )
}

export default Register
