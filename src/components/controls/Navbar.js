import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/css/Navbar.css'
import logo from '../../styles/images/Logo.jpeg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const options = ['Home', 'Services', 'Contact-Us']

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
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> <img src={logo} alt='' style={{height:'80px', justifyContent:'left'}}/> </Link>
        <div className='navbar-container'>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            { // 
            options.map((op) => {
              return (
              <li className='nav-item'>
                <Link to={`/${op.toLowerCase()}`} className={`nav-links`} onClick={closeMobileMenu}> {op} </Link>
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