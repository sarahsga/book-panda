import React from 'react'
import classes from './BookItem.module.scss'
import StarRating from '../../UI/StarRating/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const BookItem = props => {
  return (
    <div className={classes.BookItem}>
      <div className={classes.content}>
        <figure>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${props.book.imageUrl})` }}
          />
        </figure>
        <figcaption>
          <p className={classes.title}>{props.book.name}</p>
          <p className={classes.author}>
            {props.book.authors.map(a => a.name).join(', ')}
          </p>
        </figcaption>
        <div className={classes.Rating}>
          <StarRating rating={props.book.rating} />
        </div>
      </div>
      <div className={classes.cartBtn}>
        <FontAwesomeIcon icon={faCartPlus} />
        Add To Cart
      </div>
    </div>
  )
}

export default BookItem
