import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home1'
import React from 'react'
import './styles/index.css'

function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/courses' element={<Courses/>} />
    </Routes>
    <Footer />
</Router>
  )
}

export default App
