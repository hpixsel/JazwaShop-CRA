import React from 'react'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <>
      <div className={styles.hero__svg}>
        <img src={process.env.PUBLIC_URL + "/assets/hero__svg.svg"} alt="" />
      </div>
      <div className={styles.hero__text}>
        <h1>Tu znajdziesz to czego szukasz</h1>
        <p>Używane podręczniki w jednym miejscu</p>
      </div>
    </>
  )
}
