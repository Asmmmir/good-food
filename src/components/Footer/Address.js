import React from "react";
import styles from './index.module.scss'

export const Address = () => {
  return (
    <ul className={styles.address}>
      <li className={styles.address__logo}>
        <img src="./img/logo.svg" alt="logo" />
        <p>f.palace</p>
      </li>
      <li>
        <a href="mailto:Info@food_palace.com">
        info@food_palace.com

        </a>
          </li>
      <li>www.food_palace.com</li>
    </ul>
  );
};
