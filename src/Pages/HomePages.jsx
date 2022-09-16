
import React from 'react'
import NavBar from '../Components/NavBar'
import '../Pages/HomePage.css'
import CheckIn from '../Components/CheckIn'
import { Checkindata } from '../Components/Checkindata' 
import { Checkoutdata} from '../Components/Checkoutdata'



const HomePages = () => {
  return (
    <div className='MainContainor'>
     
     <div className='NavContainor'> <NavBar/></div>
     <div className="body"><br /><br />
      <div className='HotelImg'></div><br /><br />
      <div className="checkinmain">
      <div className='CheckIn'><CheckIn heading='Checking in today' btntxt='Check in' data={Checkindata}/></div>
      <div className='CheckOut'><CheckIn heading='Checking out today' btntxt='Check out' data={Checkoutdata}/></div>
       </div>
    </div>

    
    </div>
  )
}

export default HomePages
