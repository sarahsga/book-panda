import React from 'react'
import classes from './NavigationItem.module.scss'
import { NavLink } from 'react-router-dom'

const NavigationItem = props => {
  const badge = props.badge ? (
    <span className={classes.badge}>{props.badge}</span>
  ) : null

  const content = props.link ? (
    <NavLink
      to={props.link}
      activeClassName={classes.active}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  ) : (
    <a onClick={props.clicked}>{props.children}</a>
  )

  return (
    <li className={classes.NavigationItem} onClick={props.clicked}>
      {badge}
      {content}
    </li>
  )
}

export default NavigationItem
