import React from 'react'
import RoomLabel from './RoomLabel'
import Button from './Button'
import './Popup.css'
import { useState } from 'react'

const Popup = ({setstate}) => {
  const [roomnumber, setRoomNumber] = useState('')
  const [adultcapacity, setAdultCapacity] = useState('')
  const [childcapacity, setChildCapacity] = useState('')
  const [price, setPrice] = useState('')

  const ClickMe=(e)=>{
    e.preventDefault()
    console.log(roomnumber,adultcapacity,childcapacity,price);
    setstate(false)
  }
  return (
   <div className="popup-container">
      <div className="popup"><form method='post' onSubmit={ClickMe}>
        <h2>ADD NEW ROOM</h2>
   <RoomLabel  title='Room Number' prop={setRoomNumber} types='number'/>
   <RoomLabel  title='Adult Capacity' prop={setAdultCapacity} types='number'/>
   <RoomLabel  title='Children Capacity'prop={setChildCapacity} types='number' />
   <RoomLabel  title='Price' prop={setPrice} types='number'/> 
   <div className="subbtn">
   <Button text='Save ' type='submit'/><label id='or' htmlFor="">or</label><label id='close' htmlFor="" onClick={()=>{setstate(false)}}>Close</label>
   </div></form></div>
   </div>
     
    
  )
}

export default Popup
