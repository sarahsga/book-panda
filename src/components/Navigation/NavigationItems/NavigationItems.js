import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/best-sellers" exact>
        Best Sellers
      </NavigationItem>
      <NavigationItem link="/my-cart" exact>
        My Cart
      </NavigationItem>
      <NavigationItem link="/request-book" exact>
        Request A Book
      </NavigationItem>
      <NavigationItem link="/contact" exact>
        Contact Us
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
