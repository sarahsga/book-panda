import React from 'react'
import classes from './CartData.module.scss';
import CartRow from './CartRow/CartRow'

const CartData = props => {
  return (
    <div className={classes.CartData}>
      {props.cart.map((item, index) => (
        <CartRow key={index} item={item} index={index} />
      ))}
      <div className={classes.total}>
        <strong>Total Price </strong>
        <span>$ {props.totalPrice}</span>
      </div>
    </div>
  )
}

export default CartData
