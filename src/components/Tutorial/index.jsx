import React from 'react'
import styles from './tutorial.module.css'

export default function Tutorial() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__text}>
          <h2>Jak zacząć działać?</h2>
          <div className={styles.content__text__points}>
            <div className={styles.content__text__row}>
              <img src={process.env.PUBLIC_URL + "/assets/" + "tutorial-1.svg"} alt="numbers" />
              <p>Zarejestruj/Zaloguj się</p>
            </div>
            <div className={styles.content__text__row}>
              <img src={process.env.PUBLIC_URL + "/assets/" + "tutorial-2.svg"} alt="numbers" />
              <p>Zrób zdjęcie i przygotuj opis</p>
            </div>
            <div className={styles.content__text__row}>
              <img src={process.env.PUBLIC_URL + "/assets/" + "tutorial-3.svg"} alt="numbers" />
              <p>Dodaj swoją książkę</p>
            </div>
            <div className={styles.content__text__row}>
              <img src={process.env.PUBLIC_URL + "/assets/" + "tutorial-4.svg"} alt="numbers" />
              <p>Gotowe! Teraz zaczekaj na kontakt</p>
            </div>
          </div>
        </div>
        <div className={styles.svg}>
          <img src={process.env.PUBLIC_URL + "/assets/tutorial.svg"} alt="svg" />
        </div>
      </div>
    </div>
  )
}
