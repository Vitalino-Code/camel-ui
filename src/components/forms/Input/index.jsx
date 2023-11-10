import React, { useState } from 'react'

import { Wrapper } from './styles'

import {ReactComponent as VisibilityOn} from "../../../assets/icons/visibilityOn.svg"
import {ReactComponent as VisibilityOff} from "../../../assets/icons/visibilityOff.svg"

function Input(props) {
  const [type, setType] = useState('')

  function changeVisibility() {
    type === 'text' ? setType('password') : setType('text')
  }

  return (
    <Wrapper>
      {props.children}
      <div>
        <input
          type={type || props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          required={props.required}
          onChange={props.handleChange}
        />
        {props.name === 'password' || props.name === 'confirmPassword' ? (
          <button type="button" onClick={() => changeVisibility()}>
            {type === 'text' ? <VisibilityOff /> : <VisibilityOn />}
          </button>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  )
}

export default Input
