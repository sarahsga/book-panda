import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

const NavigationItems = props => {
  return (
      <ul className={classes.NavigationItems}>
          <NavigationItem>Best Sellers</NavigationItem>
          <NavigationItem>My Cart</NavigationItem>
          <NavigationItem>Request A Book</NavigationItem>
          <NavigationItem>Contact Us</NavigationItem>
      </ul>
  )
}

export default NavigationItems
