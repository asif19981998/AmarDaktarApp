import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import Dropdown from './dropdown';
import Button from './button';

function Navbar() {
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
            EPIC
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
            
            <li className='nav-item'>
              <Link
                to='/doctorBlog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Doctor Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/appointment'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Appointment
              </Link>
            </li>
           
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/registration'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Registration 
                {/* <i className='fas fa-caret-down' /> */}
                
              </Link>
              {dropdown && <Dropdown/>}
              
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
          <Button/>
        </nav>
       
      </>
    )
}

export default Navbar
