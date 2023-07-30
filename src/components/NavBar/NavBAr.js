import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../images/logo.svg'
import {FaAlignRight as NavIcon} from 'react-icons/fa'

const NavBAr = () => {
  return (
    <div className='navbar'>
     <div className="logoContainer">
          <img src={logo} alt="logo" />
     </div>
     <div className="navLinks">
          <button type='button'className='navButton'>
               <NavIcon className='navIcon'/>
          </button>
          <ul className="navList">
               <Link to='/'>Home</Link>
               <Link to='/rooms'>Rooms</Link>
          </ul>
     </div>
    </div>
  )
}

export default NavBAr