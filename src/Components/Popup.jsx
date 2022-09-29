import React from 'react'
import RoomLabel from './RoomLabel'
import Button from './Button'
import './Popup.css'
import { useState,useEffect } from 'react'
import SelectLabel from './SelectLabel'
import apicall from '../Services/apiCall'


const Popup = ({setState,editingId,setEditingId,roomData}) => {
  const [formData, setFormData] = useState({
    roomNumber:"",
    adultCapacity:"",
    childCapacity:"",
    price:"",
    amenities:[]
  });
useEffect(() => {
     if (editingId) setFormData (roomData.find(r=>r.id == editingId))
}, [editingId])

const {roomNumber,adultCapacity,childCapacity,price,amenities} = formData;

  const onChange =(value,key)=>{
    setFormData(prev=>({
      ...prev,[key]:value
    }))
  }

  

  const ClickMe= async(e)=>{
    e.preventDefault()
   let res;
   if(editingId){
    res=await updateRoom()
   }else{
    res=await addRoom()
   }
        console.log(res);
        closeWindow();

  };
const addRoom=()=>apicall("/rooms","POST",formData)
const updateRoom=()=>apicall(`/rooms/${formData.id}`,"PUT",formData)

function closeWindow(){
    setState(false)
    setEditingId(null)
  }


  const addAmenities=(value)=>{
    if(value && !amenities.map(a=>a.text).includes(value)){
    onChange([...amenities,{text:value}],"amenities")
  }}

  return (
    <div className="popup_main">
   <div className="popup-container">
      <div className="popup"><form method='post' onSubmit={ClickMe}>
        <h2>ADD NEW ROOM</h2>
   <RoomLabel  title='Room Number' value={roomNumber} types='number' onChange={(value)=>onChange(value ,"roomNumber")}/>
   <RoomLabel  title='Adult Capacity' value={adultCapacity} types='number'  onChange={(value)=>onChange(value,"adultCapacity")}/>
   <RoomLabel  title='Children Capacity'value={childCapacity} types='number'  onChange={(value)=>onChange(value,"childCapacity")} />
   <RoomLabel  title='Price' value={price} types='number'  onChange={(value)=>onChange(value,"price")}/> 
   
   
   
  { editingId &&
   
   <div className="Amenities">
    <h2>Amenities </h2>
    <select onChange={(e)=>{addAmenities(e.target.value)}}>
      <option  value="">Select</option>
      <option value="Tv">Television</option>
      <option value="Bed">Bed</option>
      <option value="Wifi">Wifi</option>
      <option value="Ac">AC</option>
      
    </select>

   
  
   <div className='selectdata'>
    {amenities.map((datas,index)=>{
    return(
    <SelectLabel datas={datas.text} key={index} index={index} setSelect={(value)=>onChange(value,"amenities")} amenities={amenities}/>
    )})}
    </div>
    </div>
     }
    <div className="sub2btn">
   <Button text='Save ' type='submit'/><label id='close' htmlFor="" onClick={closeWindow}>Close</label>
   </div> 
   </form>
   </div>
       </div>
     
    </div>
  )
}

export default Popup
