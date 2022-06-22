import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleClick= ()=>{
    navigate('./')
  }
  return (
    <nav className="navbar d-flex justify-content-around">

      <div className='navText' >
          <h3 className='header mt-2' onClick={handleClick}>Coffe Shop</h3>
    </div>
        
 </nav>
  )
}

export default Header