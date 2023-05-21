import React from 'react'
import Services from './container/Services/Services'
import Appointments from './container/Appointments/Appointments'
import Home from './container/Home/Home'
import Contact from './container/Contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './container/SharedLayout/SharedLayout'
import AllAppointments from './container/Admin/AllAppointments'
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
<BrowserRouter>
<Toaster/ >
  <Routes>
    <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
    <Route path="services" element={<Services />} />
    <Route path="appointments" element={<Appointments />} />
    <Route path="contact" element={<Contact />} />
    <Route path="admin" element={<AllAppointments />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
