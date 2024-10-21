import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
      <Link to='/' className='homeBtn'>Wilsonville Computer Science</Link>
      <Link to='/courses' className='coursesBtn'>Courses</Link>
      <Link to='/about' className='aboutBtn'>About</Link>
    </div>
  )
}

export default Navbar
