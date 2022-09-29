import React from 'react'
import NavBar from '../Components/NavBar'
import './BookingPage.css'
import Button from '../Components/Button'
import NewBooking from './NewBooking'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import apicalls from '../Services/apiCalls'


const BookingPage = ({}) => {
  const [roomBooking, setRoomBooking] = useState([])
  
  const [Booking, setBooking] = useState(false)
  function New(){
    setBooking(true)
    console.log(Booking);
  }
  useEffect(() => {
    apicalls("/booking","GET")
      .then(response=>{
        setRoomBooking(response);
      })
  }, [setRoomBooking])


  return (
    <div className='mainbox'>
      <NavBar/><div className="mainheader"> <h1 id='head'>Bookings</h1><div><label  htmlFor="" >
         <NavLink to='/NewBooking'id='newpage'> New Booking</NavLink></label></div></div>
      <div className='header'>
     
        <div><input type="text"  placeholder='(Type Guest Name)'/></div> <div><input type="text"  placeholder='-Any status-'/> </div>
        <div> <Button text='search'/> </div>
        
      </div>
      <div className="bookingbody"> 
        <div>
        <div className="table_sec_booking">
        
    <div className="wrapper_booking ">
        <div className="box a"><h5>Guest last Name</h5></div>
        <div className="box a"><h5>Guest first name</h5></div>
        <div className="box a"><h5>Room Number</h5></div>
        <div className="box a"><h5>check in date</h5></div>
        <div className="box a"><h5>check out date</h5></div>
        <div className="box a"><h5>Status</h5></div>

</div>
{roomBooking.map(({
  roomId,guestLastName,guestFirstName,room,checkInData,checkOutData,status,id
})=>{ 
         return (
        
        <div className="book_container" key={id}>
        <div className="value">{guestLastName}</div>
        <div className="values1">{guestFirstName}</div>
        <div className="values">{room.roomNumber}</div>
        <div className="values1">{checkInData}</div> 
        <div className="values1">{checkOutData}</div> 
        <div className="values">{status}</div> 
        </div>
         );
        })}
        </div>
      </div>  
    </div>
    </div>
  )
}

export default BookingPage
