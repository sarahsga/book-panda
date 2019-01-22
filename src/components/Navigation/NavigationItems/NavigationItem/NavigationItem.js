import React from 'react'
import classes from './NavigationItem.module.scss'
import { NavLink } from 'react-router-dom'

const NavigationItem = props => {
  const badge = props.badge ? (
    <span className={classes.badge}>{props.badge}</span>
  ) : null

  return (
    <li className={classes.NavigationItem} onClick={props.clicked}>
      {badge}
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
