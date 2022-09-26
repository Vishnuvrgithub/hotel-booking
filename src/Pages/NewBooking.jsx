import React from 'react'
import './NewBooking.css'
import RoomLabel from '../Components/RoomLabel'
import NavBar from '../Components/NavBar'
import Button from '../Components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'





const NewBooking = () => {
  const [available, setAvailable] = useState(false)
 

  const navigate=useNavigate()
  const [lastname, setLastName] = useState('')
  const [firstname, setFirstName] = useState('')
  const [cid, setCid] = useState('')
  const [cod, setCod] = useState('')
  const [nod, setNod] = useState('')
  const [noc, setNoc] = useState('')

  function Available(e){
      setAvailable(true)
    console.log(available)
    e.preventDefault()
    console.log(lastname,firstname,cid,cod,nod,noc);

    
  }
  const [newavailable, setNewAvailable] = useState(false)
  function NewAvailable(){
    setNewAvailable(!newavailable)
    console.log(newavailable)
    

  
  }
  
  return (
  
  <div><NavBar/>
    <div className='newbooking_containor'>
      
      <h2>New Booking</h2>
      <div className="newbooking_subcontainor"><form method='post' onSubmit={Available}>
          <div className="newbooking_body">
           <RoomLabel title='Guest Last Name' prop={setLastName}/>
           <RoomLabel title='Guest First Name' prop={setFirstName}/>
           <RoomLabel title='Check In Date' types="date" prop={setCid}/>
           <RoomLabel title='Check Out Data' types="date" prop={setCod}/>
           <RoomLabel title='Number Of Adults' prop={setNod}/>
           <RoomLabel title='Number Of Childrens' prop={setNoc}/>
           
           
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

