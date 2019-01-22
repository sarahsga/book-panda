import React from 'react'
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'

const AddToCartBtn = props => {
  return (
    <Button
      text={props.isInCart ? 'Added To Cart' : 'Add To Cart'}
      icon={props.isInCart ? faCheck : faCartPlus}
      height={props.height}
      disabled={props.isInCart}
      clicked={props.clicked}
    />
  )
}

export default AddToCartBtn
