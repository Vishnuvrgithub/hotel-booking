import React from 'react'
import './RoomLabel.css'

const RoomLabel = ({bg,title,prop,types}) => {
  return (
    <div className='box'>
        <label className='room11' >{title} *</label> 
    <div>
       <input type={types} className='ip label' placeholder={title}  onChange={(event)=>{prop(event.target.value)}} required/>
    </div>
    </div>
  )
}

export default RoomLabel
