import React,{useState} from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from "react-icons/fa";


import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    
    const handleToggle =()=>{
     isOpen ? setIsOpen(!isOpen) : setIsOpen(!isOpen);
    }


  return (
    <nav className="navbar">
     <div className="nav-center">
          <div className="nav-header">
               <Link to="/">
                    <img src={logo} alt='logo'/>
               </Link>
          </div>
          <FaAlignRight className='nav-icon' onClick={handleToggle}/>

          <ul className={isOpen ? "nav-links show-nav":"nav-links"}>
               <Link to='/'>Home</Link>
          </ul>
     </div>
    </nav>
  )
}

export default Navbar