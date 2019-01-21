import React from 'react'
import categoryBg from './../../../assets/images/bg-book-category-tile.jpg'
import classes from './CategoryItem.module.scss'
import { NavLink } from 'react-router-dom'

const CategoryItem = () => {
  return (
    <article className={classes.CategoryItem}>
      <span className={classes.image}>
        <img src={categoryBg} alt="REPLACE THIS" />
      </span>
      <NavLink to="/">
        <h2>Animals APIs</h2>
      </NavLink>
    </article>
  )
}

export default CategoryItem
