import React from 'react'
import styles from '../Slider/slider.module.css'

export default function Card(slide) {
  return (
    <div className={styles.card}>
      <img src={process.env.PUBLIC_URL + "/assets/" + slide.img} alt="" />
      <div className={styles.card__text}>
        <div className={styles.card__text__heading}>
          <h3>{slide.title}</h3>
          <p>{slide.price}zł</p>
          <span className={styles.tooltip}>{slide.title}</span>
        </div>
        <p>{slide.name}</p>
        <div className={styles.card__text__contact}>
          <div>
            <p>Tel: {slide.tel.slice(0,3)} {slide.tel.slice(3,6)} {slide.tel.slice(6,9)}</p>
            <p>Email: {slide.mail}</p>
          </div>
          <a href={slide.fb} target="_blank">
            <img src={process.env.PUBLIC_URL + "/assets/facebook.svg"} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}
