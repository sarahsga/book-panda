import React, { Component } from 'react'
import classes from './BookPrice.module.scss'
import AddToCartBtn from '../../../UI/AddToCartBtn/AddToCartBtn'
import * as utils from './../../../../utils'

class BookPrice extends Component {
  render() {
    return (
      <section className={classes.BookPrice}>
        <div className={classes.info}>
          <p className={classes.head}>
            <strong>Paperback Price</strong>
          </p>
          <div className={classes.price}>
            <s>$ {this.props.price}</s>
            <div className={classes.discountedPrice}>
              <span>
                ${' '}
                {utils.getDiscountedPrice(
                  this.props.price,
                  this.props.discount
                )}
              </span>
              <span>
                Save $
                {utils.getMoneySaved(this.props.price, this.props.discount)} (
                {this.props.discount} %)
              </span>
            </div>
          </div>
        </div>
        <AddToCartBtn
          height="40"
          isInCart={this.props.isInCart}
          clicked={this.props.addToCart}
        />
      </section>
    )
  }
}
export default BookPrice
