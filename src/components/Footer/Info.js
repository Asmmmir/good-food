import styles from "./index.module.scss";
export const Info = () => {
  return (
    <ul className={styles.info}>
      <li>Information</li>
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Testimonial</a>
      </li>
      <li>
        <a href="#">Event</a>
      </li>
    </ul>
  );
};
