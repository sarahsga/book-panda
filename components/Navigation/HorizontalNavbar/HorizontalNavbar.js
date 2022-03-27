import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './HorizontalNavbar.module.scss'
import Logo from './../../Logo/Logo'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'
import Link from 'next/link'

const HorizontalNavbar = props => {
  return (
    <header className={classes.HorizontalNavbar}>
      <Link href="/" className={classes.Logo}>
        <Logo />
      </Link>

      <nav className={classes.DesktopOnly}>
        <NavigationItems items={props.items}/>
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  )
}

export default HorizontalNavbar
