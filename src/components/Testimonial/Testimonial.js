import styles from "./testimonial.module.scss";

export const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__container}>
        <div className={styles.testimonial__container__wrapper}>
          <div className={styles.image}>
            <img
              className={styles.image__phone}
              src="../good-food/img/testimonial/testi-food.png"
              alt=""
              width='100%'
            />
  
          </div>
          <div className={styles.title}>
            <p className={styles.title__about}>Testimonial</p>
            <h1>That's what our Client Says</h1>
            <p className={styles.title__text}>
            “Food palace is an awesome place. Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province”
            </p>
            <div className={styles.title__review}>
                <p>Jessica Parker</p>
                <p>Product Designer @ Kitty</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
