import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import  Dropdown  from './Dropdown';


function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ dropdown, setDropdown ] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  };

  return (
    <>

      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          NMAROMBA
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
               NEWS  <i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}>
              ENTREVISTAS
            </Link>

          </li>
          <li className='nav-item'>
            <Link
              to='/entrevistas'
              className='nav-links'
              onClick={closeMobileMenu}>
              QUEM SOMOS
            </Link>

          </li>


          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
            EVENTOS
            </Link>
          </li>


          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
             Pesquisar <i className="fa-thin fa-magnifying-glass" />
            </Link>
          </li>

        </ul>
        <Button />
      </nav>
    </>
  );
}
export default Navbar;
