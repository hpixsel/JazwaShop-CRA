import React from 'react'
import styles from './footer.module.css'
import data from './footer.json'

export default function Footer() {
  const footerItems = data.items.map(data => {
    return (
      <div key={data.name}>
        <p>{data.name}</p>
        {data.items && data.items.map(item => {
          return (
            <div className={styles.items}>
              {item.url
                ? <a href={item.url}>{item.name}</a>
                : <p>{item.name}</p>
              }
              {item.github && <div>Github</div>}
              {item.website && <div>Website</div>}
            </div>
          )
        })}
      </div>
    )
  })


  return (
    <div className={styles.container}>
      {footerItems}
    </div>
  )
}
