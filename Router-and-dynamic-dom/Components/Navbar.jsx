import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-[50px] px-[200px] mt-[20px] mb-[20px] justify-center'>
     <h1><Link to="/">Home</Link></h1>
     <h1><Link to="about">About</Link></h1>
     <h1><Link to="services">Services</Link></h1>
     <h1><Link to="Contact">Contact</Link></h1>
    </div>
  )
}

export default Navbar
