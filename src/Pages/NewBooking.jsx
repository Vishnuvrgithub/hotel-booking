import React from 'react'
import './NewBooking.css'
import RoomLabel from '../Components/RoomLabel'
import Button from '../Components/Button'
import { useState } from 'react'
import NewAmenities from './NewAmenities'


const NewBooking = ({setstate}) => {
  const [Amenities, setAmenities] = useState(false)
  function Extra(){
    setAmenities (true)
    console.log(Amenities);
  }
  return (
    <div className="Newbooking_main">
      
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
   <Button text='Save ' type='submit'/><label id='close' htmlFor="" onClick={()=>{setstate(false)}}>Close</label>
    <Button text='Add Ammenities' fun={Extra}/></div></form></div>
   </div>
   
    
   <div className={Amenities ? 'Am' : ""}>
       {Amenities && <NewAmenities setstate={setAmenities}/>}
       </div>

   </div>
  )
}

export default NewBooking
