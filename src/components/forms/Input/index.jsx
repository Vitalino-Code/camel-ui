import { useState } from 'react'

import { AiFillEye } from 'react-icons/ai'
import { BsEyeSlashFill } from 'react-icons/bs'

import { Wrapper } from './styles'

const Input = ({
  type,
  name,
  id,
  placeholder,
  autoComplete,
  required,
  handleChange,
  icon: Icon,
  value,
}) => {
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
          value={value || ''}
        />
        {name === 'password' || name === 'confirmedPassword' ? (
          <button type="button" onClick={() => changeVisibility()}>
            {inputPasswordType === 'text' ? <BsEyeSlashFill /> : <AiFillEye />}
          </button>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  )
}

export default Input
