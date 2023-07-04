import React from "react";
import styles from "./navigation.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiSuitcase } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <img src="./good-food/img/logo.svg" alt="logo" />
            <p>f.palace</p>
          </div>

          <div className={styles.nav__icons}>
            <ul className={styles.nav__icons__list}>
              <li className={styles.nav__icons__list_icon}>
                <FaMagnifyingGlass  size='22px' color="rgba(46,46,46,1)" />
              </li>
              <li className={styles.nav__icons__list_icon}>
                <GiSuitcase size='25px' color="rgba(46,46,46,1)" />
              </li>
              <li className={styles.nav__icons__list_icon}>
                <AiOutlineMenu size='25px' color="rgba(46,46,46,1)" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
