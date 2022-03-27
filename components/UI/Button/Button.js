import React from 'react'
import classes from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = props => {
  const style = props.height
    ? {
        height: `${props.height}px`,
        lineHeight: `${props.height}px`
      }
    : {}
  const elClasses = [classes.Button]
  elClasses.push(props.disabled ? classes.disabled : classes.enabled)
  return (
    <div
      className={elClasses.join(' ')}
      style={style}
      onClick={props.disabled ? () => {} : props.clicked}
    >
      <FontAwesomeIcon icon={props.icon} />
      {props.text}
    </div>
  )
}

export default Button
