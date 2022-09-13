import React from 'react'
import Slider from 'react-slick'
import styles from './slider.module.css'
import tempData from './slider.json'

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
            <div className={styles.card} key={slide.id}>
              <img src={process.env.PUBLIC_URL + "/assets/" + slide.img} alt="" />
              <div className={styles.card__text}>
                <div className={styles.card__text__heading}>
                  <h3>{slide.title}</h3>
                  <p>{slide.price}zł</p>
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
        })}
      </Slider>
    </div>
  )
}
