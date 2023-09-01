import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import  Cart from '../pages/Cart'
import  Home from '../pages/Home'
import About from '../pages/About'
import Features from '../pages/Features'
import Licensing from '../pages/Licensing'



export const AllRoutes = () => {
  return (
  
    <Routes scrollBehavior="smooth">
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/licensing" element={<Licensing />} />
      

    </Routes>
  
  )
}
