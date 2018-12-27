import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'
const ListLink = props => (
  <li className={ styles.menu__item }>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div className={ styles.wrapper }>
    <header className={ styles.header }>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Remigiusz Wasiak</h3>
      </Link>
      <ul className={ styles.menu }>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)
