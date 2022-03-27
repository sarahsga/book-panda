import React from 'react'
import classes from './CartRow.module.scss'
import BookInfoCell from './BookInfoCell/BookInfoCell'
import * as utils from './../../../lib/utils'

const CartRow = props => {
  return (
    <>
      <div className={[classes.cell, classes.count].join(' ')}>
        {props.index + 1}
      </div>
      <div className={classes.cell}>
        <BookInfoCell book={props.item} />
      </div>
      <div className={classes.cell}>
        $ {utils.getDiscountedPrice(props.item.price, props.item.discountPercentage)}
      </div>
    </>
  )
}

export default CartRow
