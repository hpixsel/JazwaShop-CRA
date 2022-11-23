import React from 'react'
import styles from './profile.module.css'
import tempData from '../components/Slider/slider.json'
import StockCard from '../components/StockCard'
import classNames from 'classnames'

export default function Stock() {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <a href='#!' data-active="inactive">Profil</a>
      <a href='#!' data-active="active">Wystawione</a>
      <a href='#!' className={styles.logout}>Wyloguj</a>
    </div>
    <div className={classNames(styles.right, styles.full_width_right)}>
      {tempData.slider.map(card => {
        return(
          <StockCard img={card.img} header={card.title} price={card.price} date={card.added} key={card.id} />
        )
      })}
    </div>
  </div>
  )
}
