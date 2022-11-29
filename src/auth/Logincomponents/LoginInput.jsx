import React from 'react'

const LoginInput = () => {
  return (
    <div>
        <input
            type={ type }
            name={ name }
            placeholder={ placeholder }
            onChange={ onChange }
            value={ value }
        />
    </div>
  )
}

export default LoginInput;
