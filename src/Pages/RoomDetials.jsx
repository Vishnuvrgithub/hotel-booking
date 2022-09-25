import React from 'react'
import NavBar from '../Components/NavBar'
import './RoomDetials.css'
import Button from '../Components/Button'
import { useState,useEffect } from 'react'
import Popup from '../Components/Popup'
import apicall from '../Services/apiCall'





const RoomDetials = ({data}) => {
    const [roomData, setRoomData] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [state, setState] = useState(false);

function  popuproom(){
    console.log(state);
    setState(true);
}

    useEffect(() => {
      apicall("/rooms","GET")
        .then(response=>{
         setRoomData(response);
        })
    }, [setRoomData])


    

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
        <div className="box c"><h5>Edit</h5></div>

</div>
        {roomData.map((
            {
                roomNumber, adultCapacity, childCapacity,price,id
            }
        )=>{ 
         return (
        
        <div className="data_container" key={id}>
        <div className="values">{roomNumber}</div>
        <div className="values">{adultCapacity}</div>
        <div className="values">{childCapacity}</div>
        <div className="values">{price}</div> 
        <div className="values" onClick={()=>{popuproom(true);setEditingId(id)}
        
        }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='20px' fill='grey' height='20px'><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/></svg></div> 
        </div>
         );
        })}
    </div>

    <div className={ state ? 'popup' : ""}>
    {state && <Popup 
    roomData={roomData}
    editingId={editingId}
    setEditingId={setEditingId}
    setState={setState}
    
    />}
    </div>
    </div>
      
  )}
  

export default RoomDetials
