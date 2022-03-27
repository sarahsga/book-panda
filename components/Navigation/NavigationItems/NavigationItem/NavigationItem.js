import Link from 'next/link'
import React from 'react'
import classes from './NavigationItem.module.scss'

const NavigationItem = props => {
  const badge = props.badge ? (
    <span className={classes.badge}>{props.badge}</span>
  ) : null

  const content = props.link ? (
    <Link
      href={props.link}
      activeClassName={classes.active}
      exact={props.exact}
    >
      {props.children}
    </Link>
  ) : (
    <a onClick={() => props.clicked()}>{props.children}</a>
  )

  return (
    <li className={classes.NavigationItem} onClick={props.itemClicked}>
      {badge}
      {content}
    </li>
  )
}

export default NavigationItem
