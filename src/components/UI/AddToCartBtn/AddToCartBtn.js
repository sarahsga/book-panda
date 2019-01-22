import React from 'react'
import classes from './AddToCartBtn.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

const AddToCartBtn = props => {
  console.log('​props', props)

  const style = props.height
    ? {
        height: `${props.height}px`,
        lineHeight: `${props.height}px`
      }
    : {}

  const elClasses = [classes.AddToCartBtn]
  elClasses.push(props.isInCart ? classes.inCart : classes.notInCart)

  return (
    <div
      className={elClasses.join(' ')}
      style={style}
      onClick={props.isInCart ? () => {} : props.clicked}
    >
      <FontAwesomeIcon icon={props.isInCart ? faCheck : faCartPlus} />
      {props.isInCart ? 'Added To Cart' : 'Add To Cart'}
    </div>
  )
}

export default AddToCartBtn
