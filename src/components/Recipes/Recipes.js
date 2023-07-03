import { Recipe } from "./Recipe";
import styles from "./recipes.module.scss";

export const Recipes = () => {
  const recipes = [
    {
      img: "./img/recipes/item1.png",
      title: "Flame-boiled dish",
      rating: 8.5,
      price: 19.99,
    },
    {
      img: "./img/recipes/item2.png",
      title: "Peach Melba dish",
      rating: 9.5,
      price: 20.99,
    },
    {
      img: "./img/recipes/item3.png",
      title: "Delmonico Steak dish",
      rating: 8.0,
      price: 18.99,
    },
  ];

  return (
    <div className={styles.recipes}>
      <div className={styles.recipes__container}>
        <div className={styles.recipes__title}>
          <h5>Recipes</h5>
          <h1>Most Popular Items</h1>
        </div>

        <div className={styles.recipes__items}>
          {recipes.map((item) => (
            <Recipe
              title={item.title}
              img={item.img}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
        <button className={styles.recipes__button}>See More Recipes</button>
      </div>
    </div>
  );
};
