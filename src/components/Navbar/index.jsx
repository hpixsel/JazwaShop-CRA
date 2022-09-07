import React, { useState } from 'react'
import styles from './navbar.module.css'
import data from './links.json'
import classNames from 'classnames'

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const links = data.links.map(links => {
    return (
      <>
        <img src={process.env.PUBLIC_URL + "/assets/" + links.svg} alt="svg" />
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
        </ul>}
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
          JaźwaStore
        </div>
        <img src={process.env.PUBLIC_URL + "/assets/hamburger.svg"} alt="logo" onClick={toggleOpen} />
      </div>
      <div className={linksClass}>
        {links}
      </div>
    </>
  )
}
