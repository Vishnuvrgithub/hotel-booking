import React from 'react'
import RoomLabel from './RoomLabel'
import Button from './Button'
import './Popup.css'
import { useState } from 'react'
import SelectLabel from './SelectLabel'


const Popup = ({setstate}) => {
  const [roomnumber, setRoomNumber] = useState('')
  const [adultcapacity, setAdultCapacity] = useState('')
  const [childcapacity, setChildCapacity] = useState('')
  const [price, setPrice] = useState('')
  const [select, setSelect] = useState([])

  const ClickMe=(e)=>{
    e.preventDefault()
    console.log(roomnumber,adultcapacity,childcapacity,price);
    setstate(false)

    
  }
  return (
    <div className="popup_main">
   <div className="popup-container">
      <div className="popup"><form method='post' onSubmit={ClickMe}>
        <h2>ADD NEW ROOM</h2>
   <RoomLabel  title='Room Number' prop={setRoomNumber} types='number'/>
   <RoomLabel  title='Adult Capacity' prop={setAdultCapacity} types='number'/>
   <RoomLabel  title='Children Capacity'prop={setChildCapacity} types='number' />
   <RoomLabel  title='Price' prop={setPrice} types='number'/> 
   <div className="sub2btn">
   <Button text='Save ' type='submit'/><label id='close' htmlFor="" onClick={()=>{setstate(false)}}>Cancel</label>
   
   
   </div>
   <div className="Amenities">
    <h2>Amenities </h2>
    <select onChange={(e)=>{setSelect([...select,e.target.value])}}>
      <option disabled value="select">Select</option>
      <option value="tv">Television</option>
      <option value="bed">Bed</option>
      <option value="wifi">Wifi</option>
      <option value="extra">Extre</option>
    </select>

   </div><div className='selectdata'>
    {select.map((data,index)=>{
    return(
    <SelectLabel select={select} data={data} key={index} index={index} setSelect={setSelect}/>
    )})}
   
   </div>
   </form></div>
       </div>
     
    </div>
  )
}

export default Popup
