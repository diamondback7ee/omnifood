import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={"#"}>
        <img className="logo" src="img/omnifood-logo.png" alt="Omnifood logo" />
      </Link>

      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav-list"]}>
          <li>
            <NavLink to={""} className={styles["main-nav-link"]}>
              Section
            </NavLink>
          </li>
          <li>
            <NavLink to={""} className={styles["main-nav-link"]}>
              Section
            </NavLink>
          </li>
          <li>
            <NavLink to={""} className={styles["main-nav-link"]}>
              Section
            </NavLink>
          </li>
          <li>
            <NavLink to={""} className={styles["main-nav-link"]}>
              Section
            </NavLink>
          </li>
          <li>
            <NavLink
              to={""}
              className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
            >
              Section
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
