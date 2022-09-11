import React from 'react'
import Slider from 'react-slick'
import styles from './slider.module.css'
import tempData from './slider.json'

export default function index() {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    centerPadding: '50px',
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    pauseOnHover: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }
  
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {tempData.slider.map(slide => {
          return (
            <div className={styles.card}>
              <img src={process.env.PUBLIC_URL + "/assets/" + slide.img} alt="" />
              <div className={styles.card__text}>
                <div className={styles.card__text__heading}>
                  <h3>{slide.title}</h3>
                  <p>{slide.price}zł</p>
                </div>
                <p>{slide.name}</p>
                <div className={styles.card__text__contact}>
                  <div>
                    <p>Tel: {slide.tel}</p>
                    <p>Email: {slide.mail}</p>
                  </div>
                  <a href={slide.fb} target="_blank">
                    <img src={process.env.PUBLIC_URL + "/assets/facebook.svg"} alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
