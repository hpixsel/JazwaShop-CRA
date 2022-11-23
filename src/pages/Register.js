import React from 'react'
import styles from './login.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="fullName">Imię i Nazwisko</label>
        <input id="fullName" type="text" placeholder='Jan Kowalski' />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder='jan@kowalski.pl' />
        <label htmlFor="pass">Hasło</label>
        <input id="pass" type="password" placeholder='*********' />
        <label htmlFor="passConfirm">Potwierdź Hasło</label>
        <input id="passConfirm" type="password" placeholder='*********' />
        <div className={styles.bottom}>
          <input type="submit" value="Utwórz Konto" />
          <p>Masz już konto? <a href="#!">Zaloguj się!</a></p>
        </div>
      </form>
    </div>
  )
}
