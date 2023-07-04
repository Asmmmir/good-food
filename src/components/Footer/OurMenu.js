import React from "react";
import styles from "./index.module.scss";

export const OurMenu = () => {
  return (
    <ul className={styles.ourmenu}>
      <li>Our menu</li>
      <li>
        <a href="#">Breakfast</a>
      </li>
      <li>
        <a href="#">
        Lunce
        </a>
      </li>
      <li>
        <a href="#">
        Dinner
        </a>
      </li>
    </ul>
  );
};
