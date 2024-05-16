import React from 'react'
import { Outlet } from "react-router-dom";
import MenuBar from './MenuBar'
import FooterBar from './FooterBar'
const Layout = () => {
  return (
    <div>
          <MenuBar></MenuBar>
          <div className='-mt-0-1'><Outlet></Outlet></div>
          <FooterBar></FooterBar>
    </div>
  )
}

export default Layout
