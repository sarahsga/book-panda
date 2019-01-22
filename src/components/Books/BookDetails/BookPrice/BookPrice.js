import React, { Component } from 'react'
import classes from './BookPrice.module.scss'
import AddToCartBtn from '../../../UI/AddToCartBtn/AddToCartBtn'

class BookPrice extends Component {
  getDiscountedPrice = () => {
    return (
      this.props.price -
      (this.props.discount / 100) * this.props.price
    ).toFixed(2)
  }

  getMoneySaved = () => {
    return ((this.props.discount / 100) * this.props.price).toFixed(2)
  }
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
              <span>$ {this.getDiscountedPrice()}</span>
              <span>Save ${this.getMoneySaved()} (10%)</span>
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
