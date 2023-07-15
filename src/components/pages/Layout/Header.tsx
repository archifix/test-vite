import { Link } from "react-router-dom";
import logo from '../../../assets/images/yuo.png'
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.title_name}>
          <a href="/">
          <img
            src={logo}
            height="96"
            width="90"
          // className="d-inline-block align-top"
            alt="Logo"
          />
          </a>
          <div className={styles.title}>
          <h1>Южный ордена Жукова округ</h1>
          <h2>Войск национальной гвардии</h2>
          <p>Информационно-справочный портал</p>
          </div>
        </div>
        <div className={styles.nav}>
          <a href="/">Menu</a>
          <a href="/">Menu</a>
          <a href="/">Menu</a>
          <a href="/">Menu</a>
          <a href="/">Menu</a>
          <a href="/">Menu</a>
        </div>
        </div>
    </header>
  );
};

export default Header;
