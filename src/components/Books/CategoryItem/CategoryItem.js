import React from 'react'
import categoryBg from './../../../assets/images/bg-book-category-tile.jpg'
import classes from './CategoryItem.module.scss'
import { NavLink } from 'react-router-dom'

const CategoryItem = props => {
  return (
    <article className={classes.CategoryItem} onClick={props.clicked}>
      <span className={classes.image}>
        <img src={categoryBg} alt={props.category.label} />
      </span>
      <NavLink to="/">
        <h2>{props.category.label}</h2>
      </NavLink>
    </article>
  )
}

export default CategoryItem
