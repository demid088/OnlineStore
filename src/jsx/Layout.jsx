import React from 'react'
import { Outlet } from "react-router-dom"

import Header from './Header.jsx'
import Subscribe from './Subscribe.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <>
      <Header />

      <Outlet />

      <Subscribe />
      <Footer />
    </>

    
  )
}

export default Layout;