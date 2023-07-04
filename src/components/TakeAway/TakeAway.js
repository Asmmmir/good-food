import styles from "./takeaway.module.scss";

export const TakeAway = () => {
  return (
    <div className={styles.takeaway}>
      <div className={styles.takeaway__container}>
        <div className={styles.takeaway__container__wrapper}>
          <div className={styles.image}>
            <img
              className={styles.image__phone}
              src="./good-food/img/takeaway/phone.png"
              alt=""
              width="100%"
            />
            <img
              className={styles.image__food}
              src="./good-food/img/takeaway/food.png"
              alt=""
            />
          </div>
          <div className={styles.title}>
            <p className={styles.title__about}>Take away</p>
            <h1>Simple Way To Order Your Food</h1>
            <p className={styles.title__text}>
              Keep healthy food readily available. When you get hungry, you're
              more likely to eat the first thing you see on the counter or in
              the cupboard.
            </p>
            <div className={styles.title__buttons}>
              <img src="./good-food/img/TakeAway/appstore.png" alt="" />
              <img src="./good-food/img/TakeAway/googleplay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
