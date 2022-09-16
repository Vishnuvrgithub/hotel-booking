import React from 'react'
import NavBar from '../Components/NavBar'
import './RoomDetials.css'
import Button from '../Components/Button'
import { useState } from 'react'
import Popup from '../Components/Popup'





const RoomDetials = ({data}) => {
    const [state, setstate] = useState(false);
    function  popuproom(){
    setstate(true);

}
  return (
    <div className='mainframe'>
        
        <NavBar/>
        
        <h2 id='textroom'>ROOMS</h2>
        <div className="btn_add">
        <Button fun={popuproom} text='ADD ROOM'/>
 
        </div>

    <div className="table_sec">
        
    <div className="wrapper">
        <div className="box a"><h5>Room Number</h5></div>
        <div className="box b"><h5>Adult Capacity</h5></div>
        <div className="box c"><h5>Child capacity</h5></div>
        <div className="box c"><h5>Price $</h5></div>

</div>
        {data.map((rdata,index)=>{ 
         return (
        
        <div className="data_container" key={index}>
        <div className="value">{rdata.RoomNumber}</div>
        <div className="value">{rdata.AdultCapacity}</div>
        <div className="value">{rdata.ChildCapacity}</div>
        <div className="value">{rdata.price}</div> 
        </div>
         );
        })}
    </div>

    <div className={state ? 'popups' : ""}>
    {state && <Popup  setstate={setstate}/>}
    

    </div>

   
        </div>
      
  )}
  

export default RoomDetials
