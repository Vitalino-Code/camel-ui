import { useState } from 'react'

import { Wrapper } from './styles'

import { AiFillEye } from 'react-icons/ai'
import { BsEyeSlashFill } from 'react-icons/bs'

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
            {inputPasswordType === 'text' ? <AiFillEye /> : <BsEyeSlashFill />}
          </button>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  )
}

export default Input
