import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

const NavigationItems = props => {
  const items = [
    {
      label: 'Best Sellers',
      link: '/best-sellers',
      isExact: true
    },
    {
      label: 'My Cart',
      link: '/my-cart',
      isExact: true
    },
    {
      label: 'Request A Book',
      link: '/request-book',
      isExact: true
    },
    {
      label: 'Contact Us',
      link: '/contact-us',
      isExact: true
    }
  ]
  return (
    <ul className={classes.NavigationItems}>
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          link={item.link}
          exact={item.isExact}
          clicked={props.itemClicked}
        >
          {item.label}
        </NavigationItem>
      ))}
    </ul>
  )
}

export default NavigationItems
