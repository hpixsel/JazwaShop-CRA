import React, { useState } from 'react'
import styles from './navbar.module.css'
import data from './links.json'
import classNames from 'classnames'

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)
  const sublinkClass = classNames(styles.link, styles.sublink)

  const links = data.links.map(link => {
    return (
      <>
        <a className={styles.link} href={link.url} key={link.url}>
          <img src={process.env.PUBLIC_URL + "/assets/" + link.svg} alt="svg" />
          <p>{link.name}</p>
        </a>
        {link.sublinks && link.sublinks.map(sublink => {
          return (
            <a className={sublinkClass} href={sublink.url} key={sublink.url}>
              <img src={process.env.PUBLIC_URL + "/assets/" + sublink.svg} alt="svg" />
              <p>{sublink.name}</p>
            </a>
          )
        })}
        {/* <img src={process.env.PUBLIC_URL + "/assets/" + links.svg} alt="svg" />
        <p>{links.name}</p>
        {links.sublinks && 
        <ul>
          {links.sublinks.map(sublink => {
            return (
              <>
              <img src={process.env.PUBLIC_URL + "/assets/" + sublink.svg} alt="svg" />
              <li>{sublink.name}</li>
              </>
            )
          })}
        </ul>} */}
      </>
    )
  })

  
  //toggle nav links div
  const toggleOpen = () => {
    setOpenNav(prevState => !prevState)
  }

  //linking classes based of state
  const linksClass = classNames(styles.links, {[styles.openNav]: openNav})
  
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__logo}>
          <img className={styles.nav__logo__img} src={process.env.PUBLIC_URL + "/assets/jazwastore.svg"} alt="logo" />
          <h3 className={styles.nav__logo__h3}>JaźwaStore</h3>
        </div>
        <img src={process.env.PUBLIC_URL + "/assets/hamburger.svg"} alt="menu" onClick={toggleOpen} />
      </div>
      <div className={linksClass}>
        {links}
      </div>
    </>
  )
}
