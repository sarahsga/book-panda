import React from 'react'
import classes from './BookBasicInfo.module.scss'
import StarRating from '../../../UI/StarRating/StarRating'

const BookBasicInfo = props => {
  return (
    <section className={classes.BookBasicInfo}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.authors}>
        by <span>{props.authors.map(a => a.name).join(', ')}</span>
      </p>
      <StarRating rating={props.rating} />
    </section>
  )
}

export default BookBasicInfo
