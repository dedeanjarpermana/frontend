import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import Contacts  from './pages/contacts/contacts'

import ContactUs from './pages/contact_us/contact_us'
import { BrowserRouter, Navigate, Routes, Route , Outlet} from 'react-router-dom'

import Carousel from './carousel/Carousel'
import dk from './pict_source/dark_night.jpg'
import email from './pict_source/email.png'
import gedung from './pict_source/gedung_login.jpg'
import ig from './pict_source/ig.png'
import Program from './pages/program/program'
import WhyUs from './pages/why_us/why_us'
import About from './pages/about/about'
import Career from './pages/career/career'
import Contact from './pages/contact/contact'





function App() {
  const slides = [
    // {dk},
    // {email},



    // <img src={dk} alt="dk"  />,
    // <img src={email} alt="dk"  />,
    // <img src={gedung} alt="dk"  />,
    // <img src={ig} alt="dk"  />,
    
    "https://picsum.photos/id/1032/1200/400",
    "https://picsum.photos/id/1033/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1035/1200/400",
    "https://picsum.photos/id/1036/1200/400",
  ]

  return (
    <>
    {/* <div className="container1">
      <Carousel slides={slides} controls indicators width={1200} />
    </div> */}
      
  
      <BrowserRouter>
      <Routes>
        {/* <Route path='/login'>
          <Route index element={<Login/>} />
        </Route> */}
        <Route path='/'>
          <Route index element={<Dashboard/>} />
        </Route>
        <Route path='/about'>
          <Route index element={<About/>} />
        </Route>
        
        <Route path='/program'>
          <Route index element={<Program/>} />
        </Route>

        <Route path='/why_us'>
          <Route index element={<WhyUs/>} />
        </Route>

        <Route path='/contact'>
          <Route index element={<Contact/>} />
        </Route>

        <Route path='/career'>
          <Route index element={<Career/>} />
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
