import React from 'react'
import Slider from 'react-slick'
import Card from '../Card'
import tempData from './slider.json'
import styles from './slider.module.css'

export default function index() {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          centerPadding: '64px'
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerPadding: '64px'
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          centerPadding: '64px'
        }
      }
    ]
  }
  
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {tempData.slider.map(slide => {
          return (
            <Card key={slide.id} title={slide.title} img={slide.img} name={slide.name} tel={slide.tel} price={slide.price} mail={slide.mail} fb={slide.fb} />
          )
        })}
      </Slider>
    </div>
  )
}
