import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.scss'

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      {props.items.map((item, index) => (
        <NavigationItem
          key={index}
          link={item.link}
          exact={item.isExact}
          badge={item.badge}
          clicked={item.clicked}
          itemClicked={props.itemClicked}
        >
          {item.label}
        </NavigationItem>
      ))}
    </ul>
  )
}

export default NavigationItems
