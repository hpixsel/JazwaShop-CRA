import React from 'react'
import styles from './profile.module.css'

export default function Settings() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href='#!' data-active="active">Profil</a>
        <a href='#!' data-active="inactive">Wystawione</a>
        <a href='#!' className={styles.logout}>Wyloguj</a>
      </div>
      <div className={styles.right}>
        <label htmlFor="fullName">Imię i Nazwisko</label>
        <input id="fullName" type="text" placeholder='Jan Kowalski' disabled />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder='jan@kowalski.pl' disabled />
        <label htmlFor="pass">Hasło</label>
        <input id="pass" type="password" placeholder='*********' disabled />
        <a href="#!" className={styles.red_btn}>Usuń Konto <img src={process.env.PUBLIC_URL + "/assets/delete.svg"} alt="" /></a>
      </div>
    </div>
  )
}
