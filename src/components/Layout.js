import React from 'react'
import { Outlet } from "react-router-dom";
import MenuBar from './MenuBar'
import FooterBar from './FooterBar'
const Layout = () => {
  return (
    <div>
          <MenuBar></MenuBar>
          <Outlet></Outlet>
          <FooterBar></FooterBar>
    </div>
  )
}

export default Layout
