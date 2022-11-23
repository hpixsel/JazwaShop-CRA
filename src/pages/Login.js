import React from 'react'
import styles from './login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder='jan@kowalski.pl' />
        <label htmlFor="pass">Hasło</label>
        <input id="pass" type="password" placeholder='*********' />
        <a href='#!'>Zapomniałem hasła</a>
        <div className={styles.bottom}>
          <input type="submit" value="Zaloguj" />
          <p>Nie masz jeszcze konta? <a href="#!">Zarejestruj się!</a></p>
        </div>
      </form>
    </div>
  )
}
