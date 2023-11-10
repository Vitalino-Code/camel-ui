import React from 'react'

import Input from '../../components/forms/Input/index'
import SubmitButton from '../../components/forms/submitButton/index'

import { ReactComponent as Padlock } from '../../assets/icons/padlock.svg'

function Register() {
  return (
    <>
      <h1>Registro "teste"</h1>
      <br />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Sua senha"
      >
        <Padlock />
      </Input>
      <br />
      <SubmitButton text="Registrar" />
    </>
  )
}

export default Register
