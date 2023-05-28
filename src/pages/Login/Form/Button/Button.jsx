import React from 'react';
import "./Button.scss"

const Button = ({btn}) => {
  return (
    <button className='button'>{btn}</button>
  )
}

export default Button