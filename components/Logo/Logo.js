import React from 'react'
import classes from './Logo.module.scss'
import Image from 'next/image'

const logo = props => (
  <div className={classes.Logo}>
    <Image layout="fill" src="/images/logo-panda.png" alt="Panda Books" />
  </div>
)

export default logo
