import React from "react";
import styles from "./navigation.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiSuitcase } from "react-icons/gi";
import { CgMenuRightAlt } from "react-icons/cg";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__container}>
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <img src="./img/logo.svg" alt="logo" />
            <p>f.palace</p>
          </div>

          <div className={styles.nav__icons}>
            <ul className={styles.nav__icons__list}>
              <li>
                <FaMagnifyingGlass size='22px' color="rgba(46,46,46,1)" />
              </li>
              <li>
                <GiSuitcase size='22px' color="rgba(46,46,46,1)" />
              </li>
              <li>
                <CgMenuRightAlt size='22px' color="rgba(46,46,46,1)" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
