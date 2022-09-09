import React from 'react'
import Slider from 'react-slick'
import styles from './slider.module.css'
import tempData from './slider.json'

export default function index() {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0',
    arrows: false,
    autoplay: true,
    mobileFirst: true
  }
  
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {tempData.slider.map(slide => {
          return (
            <div className={styles.card}>
              <h3>{slide.title}</h3>
              <p>{slide.name}</p>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
