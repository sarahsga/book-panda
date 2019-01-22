import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './../../store/actions'
import classes from './MyCart.module.scss'
import * as utils from './../../utils'
import CartData from './CartData/CartData'
import CheckoutForm from './CheckoutForm/CheckoutForm';

class MyCart extends Component {
  getTotalPrice = () => {
    let totalPrice = 0
    this.props.cart.forEach(item => {
      totalPrice += utils.getDiscountedPrice(
        item.price,
        item.discountPercentage
      )
    })
    return parseFloat(totalPrice.toFixed(2))
  }
  render() {
    return (
      <div className={classes.MyCart}>
        <h1>You have {this.props.cart.length} items in your cart</h1>
        <CartData totalPrice={this.getTotalPrice()} cart={this.props.cart} />
        <h2>Complete Purchase Order</h2>
        <CheckoutForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch({ type: actionTypes.ADD_TO_CART })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCart)
