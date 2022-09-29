import React from 'react'
import './NewBooking.css'
import RoomLabel from '../Components/RoomLabel'
import NavBar from '../Components/NavBar'
import Button from '../Components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apicalls from '../Services/apiCalls'
import apicall from '../Services/apiCall'

const NewBooking = () => {
  const [available, setAvailable] = useState(false)
  const [room, setRoom] = useState(null)
 

  const navigate=useNavigate()
  const [bookData, setBookData] = useState({
    guestLastName:"",
    guestFirstName:"",
    checkInData:"",
    checkOutData:"",
    status:"",
    numberOfChild:"",
    numberOfAdults:""
  });

  const {guestLastName,guestFirstName,checkInData,checkOutData,status,numberOfChild,numberOfAdults,id} =bookData;

  const onChange=(value,key)=>{
    setBookData(prev=>({
      ...prev,[key]:value
    }))
  }

  async function Available (e){
      setAvailable(true)
    console.log(available)
    e.preventDefault()
    // setBookingId(id)
    // console.log(id);
    let room = await getRoom();
    setRoom(room);
    
  }
  const getRoom=()=>apicalls("/get-rooms","POST",{
    ...bookData,
    checkOutData: new Date(bookData.checkOutData).toISOString(),
    checkInData: new Date(bookData.checkInData).toISOString(),

  })


    const bookRoom=(status)=>apicalls("/booking","POST",{
      ...bookData,
      checkOutData: new Date(bookData.checkOutData).toISOString(),
      checkInData: new Date(bookData.checkInData).toISOString(),
      roomId: room.id,
      status
    })
  
    
  
  const [newavailable, setNewAvailable] = useState(false)
  function NewAvailable(){
    console.log(room,bookData);
    bookRoom("Booked")


  }
  
  
  return (
  
  <div><NavBar/>
    <div className='newbooking_containor'>
      
      <h2>New Booking</h2>
      <div className="newbooking_subcontainor"><form method='post' onSubmit={Available}>
          <div className="newbooking_body">
           <RoomLabel title='Guest Last Name' value={guestLastName} onChange={(value)=>onChange(value,"guestLastName")}/>
           <RoomLabel title='Guest First Name' value={guestFirstName} onChange={(value)=>onChange(value,"guestFirstName")}/>
           <RoomLabel title='Check In Date' types="date" value={checkInData} onChange={(value)=>onChange(value,"checkInData")}/>
           <RoomLabel title='Check Out Data' types="date" value={checkOutData} onChange={(value)=>onChange(value,"checkOutData")}/>
           <RoomLabel title='Number Of Adults' value={numberOfAdults} onChange={(value)=>onChange(value,"numberOfAdults")}/>
           <RoomLabel title='Number Of Childrens' value={numberOfChild} onChange={(value)=>onChange(value,"numberOfChild")}/>
           
           
          </div><div className="buttonsalign">
          <Button text='Get Available Rooms'type='submit' fun={Available}/> 
          <div>
            {available? <div className='newbuttons'><Button text='Book Room' fun={NewAvailable} color='orange' bg='white'/><label onClick={()=>{navigate(-1)}} color='orange'>back</label></div>:""}
            
         </div>
         </div>
         {newavailable? <div className='newbuttons'><Button text='Check In' bg='white' color='orange'/> <Button text='Check out' color='orange' bg='white'/> <Button text='cancel' bg='white' color='orange'/></div>:"" }
       </form>
        </div>
        
        </div>
      </div>

  )
}

export default NewBooking

