import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './../../store/actions'
import classes from './MyCart.module.scss'
import * as utils from './../../utils'
import CartData from './../../components/CartData/CartData'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import Modal from '../../components/UI/Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../components/Logo/Logo'

class MyCart extends Component {
  state = {
    showModal: false
  }
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

  componentWillReceiveProps(nextProps) {
    if (this.props.cart.length && !nextProps.cart.length) {
      this.setState({
        showModal: true
      })
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    let contentEl = null
    let classesArr = [classes.MyCart]
    classesArr.push(this.props.cart.length ? classes.hasData : classes.noData)
    if (this.props.cart.length) {
      contentEl = (
        <>
          <h1>You have {this.props.cart.length} items in your cart</h1>
          <CartData totalPrice={this.getTotalPrice()} cart={this.props.cart} />
          <h2>Complete Purchase Order</h2>
          <CheckoutForm />
        </>
      )
    } else {
      contentEl = (
        <>
          <h1>Your cart is empty!</h1>
          <div className={classes.image} />
        </>
      )
    }
    return (
      <>
        <div className={classesArr.join(' ')}>
          {contentEl}
          <Modal show={this.state.showModal} modalClosed={this.closeModal}>
            <div className={classes.modalContent}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <h1>Thank you for shopping with</h1>
              <div className={classes.logoText} />
            </div>
          </Modal>
        </div>
      </>
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
