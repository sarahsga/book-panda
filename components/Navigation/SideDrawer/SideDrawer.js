import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from './../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.scss'

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <>
      <BackDrop show={props.open} clicked={props.closed} />
      <nav className={attachedClasses.join(' ')}>
        <div className={classes.Inner}>
          <h2>Menu</h2>
          <NavigationItems items={props.items} itemClicked={props.closed}/>
        </div>
      </nav>
    </>
  )
}

export default SideDrawer
