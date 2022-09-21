import React from 'react'
import NavBar from '../Components/NavBar'
import './BookingPage.css'
import Button from '../Components/Button'
import NewBooking from './NewBooking'
import { useState } from 'react'


const BookingPage = ({datas}) => {
  const [Booking, setBooking] = useState(false)
  function New(){
    setBooking(true)
    console.log(Booking);
  }
  return (
    <div className='mainbox'>
      <NavBar/> <h1 id='head'>Bookings</h1>
      <div className='header'>
     
        <div><input type="text"  placeholder='(Type Guest Name)'/></div> <div><input type="text"  placeholder='-Any status-'/> </div>
        <div> <Button text='search'/> </div>
        <div><Button text ='New Booking' fun={New}/></div>
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
{datas.map((rdatas,index)=>{ 
         return (
        
        <div className="book_container" key={index}>
        <div className="value">{rdatas.lname}</div>
        <div className="values1">{rdatas.fname}</div>
        <div className="values">{rdatas.rn}</div>
        <div className="values1">{rdatas.cid}</div> 
        <div className="values1">{rdatas.cod}</div> 
        <div className="values">{rdatas.status}</div> 
        </div>
         );
        })}
        </div>
        <div>
        
        </div>
      </div>
      <div className={Booking ? 'NewBooking' : ""}>
       {Booking && <NewBooking  setstate={setBooking}/>}
    

    </div>
  
    </div>
    </div>
  )
}

export default BookingPage
