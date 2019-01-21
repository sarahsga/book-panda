import React from 'react'
import classes from './NavigationItem.module.scss'

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      {props.children}
    </li>
  )
}

export default NavigationItem
