import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import classes from './BookPrice.module.scss'

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
          <p className={classes.price}>
            <s>$&nbsp;{this.props.price}</s>&nbsp;
            <div className={classes.discountedPrice}>
              <span>
                {' '}
                $&nbsp;
                {this.getDiscountedPrice()}
              </span>
              <span>Save ${this.getMoneySaved()} (10%)</span>
            </div>
          </p>
        </div>
        <button>
          <FontAwesomeIcon icon={faCartPlus} />
          <span>Add to Cart</span>
        </button>
      </section>
    )
  }
}
export default BookPrice
