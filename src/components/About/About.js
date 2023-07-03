import React from 'react'
import styles from './about.module.scss'

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__container__wrapper}>

        <div className={styles.image}>
          <img className={styles.image__food} src="./img/food-about.png" alt="" width='100%' />
          <img className={styles.image__ketchup} src="./img/ketchup.png" alt=""  />
        </div>
        <div className={styles.title}>
          <p className={styles.title__about}>About us</p>
          <h1>Simple Way of Eating Delicious</h1>
          <p className={styles.title__text}>Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter or in the</p>
          <button>Explore Out Story</button>
        </div>

        </div>


      </div>
    </div>
  )
}
