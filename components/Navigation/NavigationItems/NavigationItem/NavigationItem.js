import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useMemo } from 'react'
import classes from './NavigationItem.module.scss'

const NavigationItem = props => {
  const badge = props.badge ? (
    <span className={classes.badge}>{props.badge}</span>
  ) : null;

  const { asPath, isReady, } = useRouter();


  const isActive = useMemo(() => {
    return asPath === props.link;
  }, [asPath])

  const content = props.link ? (
    <Link
      href={props.link}
      className={isActive ? classes.active : ""}
      exact={props.exact}
    >
      {props.children}
    </Link>
  ) : (
    <a onClick={() => props.clicked()}>{props.children}</a>
  )

  return (
    <li className={classes.NavigationItem} onClick={props.itemClicked}>
      {badge}
      {content}
    </li>
  )
}

export default NavigationItem
