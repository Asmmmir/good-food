import React from "react";
import styles from "./index.module.scss";
import { Address } from "./Address";
import { OurMenu } from "./OurMenu";
import { Info } from "./Info";
import { Links } from "./Links";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <Address />
        <OurMenu />
        <Info/>
        <Links />
        <Social/>
      </div>
    </div>
  );
};
