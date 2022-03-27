import React from 'react'
import classes from './Input.module.scss'

const input = props => {
  const inputClasses = [classes.InputElement]

  if (props.touched && props.invalid && props.shouldValidate) {
    inputClasses.push(classes.Invalid)
  }

  const inputElement = (
    <input
      className={inputClasses.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  )

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}
export default input
