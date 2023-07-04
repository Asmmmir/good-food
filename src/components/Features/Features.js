import styles from "./features.module.scss";

export const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__container__title}>
          <h5>Features</h5>
          <h1>Out Awesome Services</h1>
        </div>
        <div className={styles.features__container__items}>
          <div className={styles.item}>
            <img src="../good-food/img/home-delivery.svg" alt="" />
            <h1>Quality Food</h1>
            <p>
              Keep healthy food readily available. When you get hungry, you're
              more likely to{" "}
            </p>
          </div>
          <div className={styles.item}>
            <img src="../good-food/img/super-taste.svg" alt="" />
            <h1>Super Taste</h1>
            <p>
              Keep healthy food readily available. When you get hungry, you're
              more likely to{" "}
            </p>
          </div>
          <div className={styles.item}>
            <img src="../good-food/img/delivery-truck.svg" alt="" />
            <h1>Fast Delivery</h1>
            <p>
              Keep healthy food readily available. When you get hungry, you're
              more likely to{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
