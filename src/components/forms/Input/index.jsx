import { useState } from 'react'

import { Wrapper } from './styles'

import { ReactComponent as VisibilityOn } from '../../../assets/icons/visibilityOn.svg'
import { ReactComponent as VisibilityOff } from '../../../assets/icons/visibilityOff.svg'

function Input({
  type,
  name,
  id,
  placeholder,
  autoComplete,
  required,
  handleChange,
  icon: Icon,
}) {
  const [inputPasswordType, setInputPasswordType] = useState('')

  function changeVisibility() {
    inputPasswordType === 'text'
      ? setInputPasswordType('password')
      : setInputPasswordType('text')
  }

  return (
    <Wrapper>
      {Icon && <Icon size={24} />}
      <div>
        <input
          type={inputPasswordType || type}
          name={name}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          onChange={handleChange}
        />
        {name === 'password' || name === 'confirmPassword' ? (
          <button type="button" onClick={() => changeVisibility()}>
            {inputPasswordType === 'text' ? (
              <VisibilityOn />
            ) : (
              <VisibilityOff />
            )}
          </button>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  )
}

export default Input
