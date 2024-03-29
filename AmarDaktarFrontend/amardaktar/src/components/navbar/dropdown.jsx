import React, { useState } from 'react';
import { MenuItems } from './menuItems';
import './dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'test clicked' : 'test'}
        
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div className="test" style={{color:"blue"}}>sign-up</div> */}
    </>
  );
}

export default Dropdown;
