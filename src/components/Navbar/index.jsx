import React, { useState } from 'react'
import styles from './navbar.module.css'
import data from './links.json'
import classNames from 'classnames'

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)
  
  const links = data.links.map(link => {
    const linkWithSub = classNames(styles.link, {[styles.with_sublinks]: link.sublinks})
    const sublinkClass = classNames(styles.link, styles.sublink)

    return (
      <>
        <a className={linkWithSub} href={link.url} key={link.url}>
          <img src={process.env.PUBLIC_URL + "/assets/" + link.svg} alt="svg"/>
          <p>{link.name}</p>
          {link.sublinks && <img className={styles.link__arrow} src={process.env.PUBLIC_URL + "/assets/arrow.svg"} alt="svg" />}
        </a>
        {link.sublinks && link.sublinks.map(sublink => {
          return (
            <a className={sublinkClass} href={sublink.url} key={sublink.url}>
              <img src={process.env.PUBLIC_URL + "/assets/" + sublink.svg} alt="svg" />
              <p>{sublink.name}</p>
            </a>
          )
        })}
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
    <div className={styles.container}>
      <div className={styles.nav}>
        <a className={styles.nav__logo} href="/">
          <img className={styles.nav__logo__img} src={process.env.PUBLIC_URL + "/assets/jazwastore.svg"} alt="logo" />
          <h3 className={styles.nav__logo__h3}>JaźwaStore</h3>
        </a>
        <img src={process.env.PUBLIC_URL + "/assets/hamburger.svg"} alt="menu" onClick={toggleOpen} />
      </div>
      <div className={linksClass}>
        {links}
      </div>
    </div>
  )
}
