import styles from "./recipe.module.scss";

export const Recipe = ({ title, rating, price, img }) => {
  return (
    <div className={styles.recipe}>
      <img src={img} alt="" />

      <div className={styles.recipe__title}>
        <p>{title}</p>
        <p className={styles.recipe__title_star}>{rating}</p>
      </div>

      <div className={styles.recipe__button}>
        <button>Add to cart</button>
        <p>${price}</p>
      </div>
    </div>
  );
};
