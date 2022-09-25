import React from 'react'
import './RoomLabel.css'

const RoomLabel = ({onChange,title,value,types}) => {
  return (
    <div className='box'>
        <label className='room11' >{title} *</label> 
    <div>
       <input type={types} value={value} className='ip_label' placeholder={title}  onChange={(event)=>{onChange(event.target.value)}}/>
    </div>
    </div>
  )
}

export default RoomLabel
