import React from 'react'
import './NewBooking.css'
import RoomLabel from '../Components/RoomLabel'
import Button from '../Components/Button'


const NewBooking = ({setstate}) => {
 
  return (
    <div className="Newbooking_main">
      
      <div className="New_Booking_container">
      <div className="NewBooking"><form id='form' method='post' >
        <h2>New Booking</h2> 
   <RoomLabel  title='Guest last name' />
   <RoomLabel  title='Guest first name'/>
   <RoomLabel  title='Check in date' />
   <RoomLabel  title='Check out date' /> 
   <RoomLabel  title='Number of adult' /> 
   <RoomLabel  title='Number of children' />     
   <div className="btnsub">
   <Button text='Save ' type='submit'/><label id='close' htmlFor="" onClick={()=>{setstate(false)}}>Cancel</label>
   </div></form></div>
   </div>
   </div>
  )
}

export default NewBooking
