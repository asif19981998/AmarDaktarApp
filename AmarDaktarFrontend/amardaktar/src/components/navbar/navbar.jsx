import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import Dropdown from './dropdown';
import Button from './button';

function Navbar(props) {
  const logout=async(e)=>{
        
    await fetch("http://localhost:5001/api/logout",{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       credentials:"include",
       
   });
   props.setName('')
}
let menu ;
   
    if(props.name ==='' || props.name===undefined){
       
         menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0"> 
         <li className="nav-item active">
            <Link to="/login" className="nav-link" >Login</Link>
          </li>
          {/* <li class="nav-item active">
            <Link to="/signUp" className="nav-link" >Register</Link>
          </li> */}
          </ul>
             
        )

    }
    else {
        console.log("hi from 2")
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0"> 
         <li className="nav-item active">
            <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
          </li>
         
          </ul>
             
        )
    }
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  useEffect(() => {
    
   
  }, [props.name])

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    return (
        <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GWS
            <i class='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
         
        
             <li className='nav-item'>
              <Link
                to='/doctor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Doctor
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hospital'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hospital
              </Link>
            </li>
            
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              <Link
                to='/registration'
                className='nav-links'
                
                onClick={closeMobileMenu}
              >
                Registration 
              </Link>
              {dropdown && <Dropdown/>}
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/appointment'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Appointment
              </Link>
            </li> */}
            <li style={{color:"#fff",marginTop:"27px"}}>{props.name}</li>
            <li
              className='nav-item'
              
            >
              {menu}
              {/* <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
                {/* <i className='fas fa-caret-down' /> 
                
              </Link> */}
             
              
            </li>
           
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
           
          </ul>
         
        </nav>
       
      </>
    )
}

export default Navbar
