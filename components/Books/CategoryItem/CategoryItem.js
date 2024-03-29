import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import classes from './CategoryItem.module.scss'

const CategoryItem = props => {
  return (
    <article className={classes.CategoryItem} onClick={props.clicked}>
      <span className={classes.image}>
        <img
          src="/images/bg-book-category-tile.jpg"
          alt={props.category.label}
        />
      </span>
      <h2>{props.category.label}</h2>
    </article>
  );
}

export default CategoryItem
