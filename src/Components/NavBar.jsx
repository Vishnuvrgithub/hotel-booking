import React from 'react'
import Bag from './Bag.png'
import  './NavBar.css'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import BurgerButton from '../Pages/BurgerButton'


function NavBar() {
//  const [navoption, setNavoption] = useState('home')
 const [burbtn, setBurbtn] = useState(false)
 function Burger(){
        setBurbtn(!burbtn)
        console.log(burbtn);
 }
  return (
   
    <div className='main'>
      <div className='leftdiv'>
     <div className='baglogo'><img className='Bag' src={Bag} alt=""/></div>
        <div className='bookingsystem '><h2><NavLink to='/'  className={({isActive})=>(isActive ?'black':'black')}>BOOKING SYSTEM</NavLink></h2></div>

        <div className="leftsub">
        <div >
          <NavLink to='/'  className={({isActive})=>(isActive ?'orange':'black')}> HomePages</NavLink></div>


        <div >
        <NavLink to='/rooms'  className={({isActive})=>(isActive ?'orange':'black')}>Rooms</NavLink></div>
        <div className='dropdown'>


        <div >
        <NavLink to='/booking'  className={({isActive})=>(isActive ?'orange':'black')}>Booking</NavLink></div>
        </div></div>
</div>


        <div className='rightdiv'>
        <div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='condacticon' width='30px' height='30px' ><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/></svg></div>

        <div className='admin'>Administrator</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='condacticon' fill='orange' width='30px' height='30px'><path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg></div>
       

        </div>
        <div className="burbtn">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={Burger} viewBox="0 0 448 512" height='40px'><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>          </div>
       
       <div className='burgerm'>{burbtn && <BurgerButton/>}</div>
       
       </div>
       
  
  )
}       

export default NavBar
