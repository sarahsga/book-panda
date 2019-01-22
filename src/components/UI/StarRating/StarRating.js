import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar as fasStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import classes from './StarRating.module.scss'

const StarRating = props => {
  const rating = props.rating // float rating (Ex: 3.7)
  console.log('​rating', rating)
  const ratingInt = parseInt(rating) // integer part of float (Ex: 3) ::::: # of full stars
  const ratingDec = rating - ratingInt // decimal part of float (Ex: 0.7) ::::: # of half stars
  const ratingRem = parseInt(5 - rating) // integer part of the difference (Ex: 1) ::::: # of empty stars
  return (
    <div className={classes.StarRating}>
      {[...Array(ratingInt)].map((r, index) => (
        <FontAwesomeIcon key={index} icon={fasStar} />
      ))}
      {[...Array(ratingDec > 0 ? 1 : 0)].map((r, index) => (
        <FontAwesomeIcon key={index} icon={faStarHalfAlt} />
      ))}
      {[...Array(ratingRem)].map((r, index) => (
        <FontAwesomeIcon key={index} icon={farStar} />
      ))}
    </div>
  )
}

export default StarRating
