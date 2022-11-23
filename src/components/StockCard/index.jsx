import classNames from 'classnames'
import React from 'react'
import styles from './stockcard.module.css'

export default function index(card) {
  return (
    <div className={styles.container} key={card.id}>
      <div className={styles.img_div}>
        <img src={process.env.PUBLIC_URL + "/assets/" + card.img} alt="" />
      </div>
      <div className={styles.text_div}>
        <div className={styles.header}>
          <h3>{card.header}</h3>
          <p>{card.price}zł</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_btns}>
            <a href="#!" className={styles.btn}>Edytuj<img src={process.env.PUBLIC_URL + "/assets/pencil.svg"} alt="" /></a>
            <a href="#!" className={classNames(styles.btn, styles.red_btn)}>Usuń<img src={process.env.PUBLIC_URL + "/assets/delete.svg"} alt="" /></a>
          </div>
          <p className={styles.date}>{card.date}</p>
        </div>
      </div>
    </div>
  )
}
