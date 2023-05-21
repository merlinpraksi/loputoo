import React from 'react'
import{ Outlet} from 'react-router-dom'
import StyledNavbar from '../../container/Navbar/StyledNavbar'
import Footer from '../../container/Footer/Footer'


const SharedLayout = () => {
  return (
    <>
<StyledNavbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default SharedLayout
