import React from 'react'
import classes from './BookInfoCell.module.scss'

const BookInfoCell = props => {
  return (
    <div className={classes.BookInfoCell}>
      <figure>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.book.imageUrl})` }}
        />
      </figure>
      <div className={classes.info}>
        <p className={classes.bookName}>{props.book.name}</p>
        <p className={classes.authors}>
          {props.book.authors.map(a => a.name).join(', ')}
        </p>
      </div>
    </div>
  )
}

export default BookInfoCell
