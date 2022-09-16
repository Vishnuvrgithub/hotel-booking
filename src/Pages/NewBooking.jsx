import React from 'react'
import './NewBooking.css'
import RoomLabel from '../Components/RoomLabel'
import Button from '../Components/Button'
import NavBar from '../Components/NavBar'

const NewBooking = () => {
  return (
    <div className="Newbooking_main">
        {/* <NavBar/> */}
      <div className="New_Booking_container">
      <div className="NewBooking"><form method='post' >
        <h2>New Booking</h2>
   <RoomLabel  title='Guest last name' />
   <RoomLabel  title='Guest first name'/>
   <RoomLabel  title='Check in date' />
   <RoomLabel  title='Check out date' /> 
   <RoomLabel  title='Number of adult' /> 
   <RoomLabel  title='Number of children' />     
   <div className="btnsub">
   <Button text='Save ' type='submit'/><label id='lab'>close</label>
   </div></form></div>
   </div></div>
  )
}

export default NewBooking
