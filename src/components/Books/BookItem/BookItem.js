import React from 'react'
import classes from './BookItem.module.scss'
import StarRating from '../../UI/StarRating/StarRating'
import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';

const BookItem = props => {
  return (
    <div className={classes.BookItem}>
      <div className={classes.content} onClick={props.clicked}>
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
      <AddToCartBtn isInCart={props.isInCart} clicked={props.addToCart} />
    </div>
  )
}

export default BookItem
