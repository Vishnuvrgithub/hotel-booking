import React from 'react'
import './button.css'
const Button = ({text,fun,type}) => {
  return (
    <div className='Button'>
      <button className='button' onClick={fun}>{text}</button>
    </div>
  )
}

export default Button
