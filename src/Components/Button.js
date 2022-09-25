import React from 'react'
import './button.css'
const Button = ({text,fun,bg,width,color}) => {
  return (
    <div className='Button'>
      <button className='button' style={{width:width, backgroundColor:bg, color:color} }onClick={fun}>{text}</button>
    </div>
  )
}

export default Button
