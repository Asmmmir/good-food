import styles from "./index.module.scss";

export const Social = () => {
  return (
    <ul className={styles.social}>
      <li>Social Handles</li>
      <li>
        <a href="#">Facebook</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">Youtube</a>
      </li>
    </ul>
  );
};
