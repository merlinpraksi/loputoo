import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from './globalStyles';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLink,
    NavBtnLink} from './NavbarElements'

const SyledNavbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

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
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              Logo
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to='/' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/appointments' onClick={closeMobileMenu}>
                  Appointments
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink to='/contact' onClick={closeMobileMenu}>
                  Contact me
                </NavLink>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/admin'>
                    <Button primary>Admin Login</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/admin'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Admin Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
 </>
  )

  }


export default SyledNavbar
