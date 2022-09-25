
import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePages from "./Pages/HomePages"
import { TableDetials } from './Components/TableDetials';
import RoomDetials from './Pages/RoomDetials';
import BookingPage from './Pages/BookingPage';
import { BookingData } from './Components/BookingData';
import NewBooking from './Pages/NewBooking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/rooms' element={<RoomDetials data={TableDetials}/>}/>
      <Route path='/booking' element={<BookingPage datas={BookingData}/>}/>
      <Route path='/NewBooking' element={<NewBooking  />}/>

    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
