import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../images/Logo.jpeg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const options = ['Home', 'Services', 'Sign-Up']

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> <img src={logo}/> </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            { // 
            options.map((op) => {
              const pathName = op.toLowerCase()
              return (
              <li className='nav-item'>
                <Link to={`/${pathName}`} className={`nav-links`} onClick={closeMobileMenu}> {op} </Link>
              </li>
              )})
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;