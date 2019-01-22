import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './HorizontalNavbar.module.scss'
import Logo from './../../Logo/Logo'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'
import { NavLink } from 'react-router-dom'

const HorizontalNavbar = props => {
  return (
    <header className={classes.HorizontalNavbar}>
      <NavLink to="/" className={classes.Logo} exact>
        <Logo />
      </NavLink>

      <nav className={classes.DesktopOnly}>
        <NavigationItems items={props.items}/>
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  )
}

export default HorizontalNavbar
