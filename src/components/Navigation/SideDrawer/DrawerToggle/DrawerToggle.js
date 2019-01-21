import React from 'react'
import classes from './DrawerToggle.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <FontAwesomeIcon icon={faBars}/>
  </div>
)

export default drawerToggle
