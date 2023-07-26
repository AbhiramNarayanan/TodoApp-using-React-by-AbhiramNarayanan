import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Notfound from "./Pages/Notfound"
import {Routes,Route,Link} from "react-router-dom"

const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Notfound/>}/>
           
        </Routes>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="contact">Contact</Link></li>
        
        </ul>
       

    </div>
  )
}

export default MainRouter