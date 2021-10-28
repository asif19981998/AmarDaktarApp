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
//     let menuForDoctorList ;
//     if(props.name ==='superadmin' ){
       
//       menuForDoctorList = (
//          <ul className="navbar-nav me-auto mb-2 mb-md-0"> 
//       <li className="nav-item active">
//          <Link to="/allDoctorList" className="nav-link" >Login</Link>
//        </li>
      
//        </ul>
          
//      )

//  }
//  else {
//      console.log("hi from 2")
//      menuForDoctorList = (
//          <ul className="navbar-nav me-auto mb-2 mb-md-0"> 
//       <li className="nav-item active">
//          <Link to="/doctorDetails" className="nav-link" onClick={logout}>Logout</Link>
//        </li>
      
//        </ul>
          
//      )
//  }



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
              {/* <Link
                to='/doctor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Doctor
              </Link> */}
              {/* {menuForDoctorList} */}
           {
              props.name ==='superadmin' &&  
              <Link 
              to="/allDoctorList" 
              className="nav-links" >Doctor List</Link>}
              {props.name !='superadmin' &&  
              <Link to="/doctorDetails" className="nav-links" >Doctor</Link>}
            </li>
            <li className='nav-item'>
              {/* <Link
                to='/hospital'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hospital
              </Link> */}
               {props.name ==='superadmin' &&  <Link to="/allHospitalList" className="nav-links" >Hospital List</Link>}
              {props.name !='superadmin' &&  <Link to="/HospitalDetails" className="nav-links" >Hospital</Link>}
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
            {props.name &&
            <div style={{height:"56px",borderRadius:"55%",width:"268px",marginTop:"13px"}}>
            <div style={{color:"#fff",marginTop:"10px",padding:"3px"}}>{props.name}</div>
            </div>
            
            }
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
