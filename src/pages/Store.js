import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import tempData from '../components/Slider/slider.json'
import styles from './store.module.css'

export default function Store() {
  const dataOG = tempData.slider

  const [input, setInput] = useState("")
  const [classSelect, setClassSelect] = useState("")
  const [subjectSelect, setSubjectSelect] = useState("")
  const [data, setData] = useState(dataOG)

  useEffect(() => {
    setData(dataOG.filter(item => {
      const itemTitle = item.title.toLowerCase()
      if (itemTitle.includes(input.toLowerCase())) {
        return (item)
      }
    }))
    setData(prevState => prevState.filter(item => {
      const itemClass = item.class
      if (itemClass.includes(classSelect)) {
        return (item)
      }
    }))
    setData(prevState => prevState.filter(item => {
      const itemSubject = item.subject
      if (itemSubject.includes(subjectSelect)) {
        return (item)
      }
    }))
  }, [input, classSelect, subjectSelect])

  return (
    <>
      <div className={styles.filters}>
        <input onInput={e => setInput(e.target.value)} type="text" />
        <div className={styles.filters__child}>
          <label htmlFor="class">Klasa:</label>
          <select name="klasa" id="class" onInput={e => setClassSelect(e.target.value)}>
            <option value=""></option>
            <option value="1TI2">1TI2</option>
            <option value="2TI2">2TI2</option>
            <option value="3TI2">3TI2</option>
            <option value="4TI2p">4TI2p</option>
          </select>
        </div>
        <div className={styles.filters__child}>
          <label htmlFor="subject">Przedmiot:</label>
          <select name="przedmiot" id="subject" onInput={e => setSubjectSelect(e.target.value)}>
            <option value=""></option>
            <option value="Polski">Polski</option>
            <option value="Matematyka">Matematyka</option>
            <option value="Angielski">Angielski</option>
            <option value="Niemiecki">Niemiecki</option>
          </select>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.grid}>
        {data.map(item => (<Card key={item.id} title={item.title} img={item.img} name={item.name} tel={item.tel} price={item.price} mail={item.mail} fb={item.fb} />))}
      </div>
    </>
  )
}
