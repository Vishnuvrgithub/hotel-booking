import React from 'react'
import RoomLabel from '../Components/RoomLabel'
import Button from '../Components/Button'
import './Aminities.css'
import { useState } from 'react'

const Popup = ({setstate}) => {
  const [Television, setTelevision] = useState('')
  const [AC, setAC] = useState('')
  const [WIFI, setWIFI] = useState('')
  const [ETBED, setETBED] = useState('')

  const ClickMe=(e)=>{
    e.preventDefault()
    console.log(Television,AC,WIFI,ETBED);
    setstate(false)
  }
  return (  
   <div className="Amenities-container">
      <div className="Amenities"><form method='post' onSubmit={ClickMe}>
        <h2>ADD NEW ROOM</h2>
        <h4>Select the following  (yes or no)</h4>
   <RoomLabel  title='Television' prop={setTelevision} types=''/>
   <RoomLabel  title='Air Condictionar' prop={setAC} types=''/>
   <RoomLabel  title='Wifi'prop={setWIFI} types='' />
   <RoomLabel  title='Extra Bed' prop={setETBED} types=''/> 
   <div className="subbtn">
   <Button text='Save ' type='submit'/><label id='or' htmlFor="">or</label><label id='close' htmlFor="" onClick={()=>{setstate(false)}}>Close</label>
   </div></form></div>
   </div>
     
   
  )
}

export default Popup
