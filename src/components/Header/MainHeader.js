import React from "react";
import styles from "./mainheader.module.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export const MainHeader = () => {
  return (
    <div className={styles.mainheader}>
      <div className={styles.mainheader__container}>
        <div className={styles.mainheader__wrapper}>
          <div className={styles.title}>
            <p className={styles.title__restaurant}>Restaurant</p>
            <h1>Good Food</h1>
            <h1>Good Mood</h1>
            <p className={styles.title__description}>
              The food palace is an neighborhood restaurant serving seasonal
              global cuisine driven by the faire.
            </p>

            <button>Explore Food Menu</button>

            <div className={styles.mainheader__social}>
              <BiLogoFacebook size='30px' color="rgba(46, 46, 46, 1)" />
              <AiOutlineInstagram size='30px' color="rgba(46, 46, 46, 1)" />
              <AiOutlineTwitter size='30px' color="rgba(46, 46, 46, 1)" />
            </div>
            
          </div>

          <div className={styles.mainheader__image}>
            <img src="./img/header-food.jpg" alt="" width="100%" />
            <img className={styles.mainheader__image_first} src="./img/food1.png" alt="" width='50%' />
            <img className={styles.mainheader__image_third}  src="./img/food3.png" alt="" width='50%' /> 
          </div>
        </div>
      </div>
    </div>
  );
};
