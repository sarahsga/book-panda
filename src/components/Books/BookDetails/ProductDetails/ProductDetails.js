import React from 'react'
import StarRating from '../../../UI/StarRating/StarRating'
import classes from './ProductDetails.module.scss';

const ProductDetails = props => {
  return (
    <div className={classes.ProductDetails}>
      <h3>Product Details</h3>
      <p>
        <strong>Paperback: </strong>
        {props.book.length}
      </p>
      <p>
        <strong>Publisher: </strong>
        {props.book.publisher} ({props.book.publishDate})
      </p>
      <p>
        <strong>ISBN-10: </strong>
        {props.book.isbn}
      </p>
      <p>
        <strong>Product Dimensions: </strong>
        {props.book.dimensions}
      </p>
      <p>
        <strong>ShippingWeight: </strong>
        {props.book.shippingWeight}
      </p>
      <div>
        <strong>Average Customer Review: </strong>
        <StarRating rating={props.book.rating} />
      </div>
    </div>
  )
}

export default ProductDetails
