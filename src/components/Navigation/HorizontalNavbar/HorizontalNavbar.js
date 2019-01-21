import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './HorizontalNavbar.module.scss'
import Logo from './../../Logo/Logo'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

const HorizontalNavbar = props => {
  return (
    <header className={classes.HorizontalNavbar}>
      {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  )
}

export default HorizontalNavbar
