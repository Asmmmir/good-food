import styles from "./index.module.scss";
export const Links = () => {
  return (
    <ul className={styles.links}>
      <li>Useful Links</li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
      <li>
        <a href="#">Conditions</a>
      </li>
    </ul>
  );
};
