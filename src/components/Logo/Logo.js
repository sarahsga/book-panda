import React from 'react'
import pandaLogo from './../../assets/images/logo-panda.png'
import classes from './Logo.module.scss'

const logo = props => (
  <div className={classes.Logo}>
    <img src={pandaLogo} alt="Panda Books" />
  </div>
)

export default logo
