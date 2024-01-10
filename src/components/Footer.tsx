import { Link, NavLink } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container grid ${styles["grid--footer"]}`}>
        <div className={styles["logo-col"]}>
          <Link to={"#"} className={styles["footer-logo"]}>
            <img
              src="img/omnifood-logo.png"
              alt="Omnifood logo"
              className="logo"
            />
          </Link>

          <ul className={styles["social-link"]}>
            <li>
              <Link to={""}>
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to={""}>
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to={""}>
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className={styles["footer-heading"]}>Contact Us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link className={styles["footer-link"]} to="tel:415-201-6370">
                415-201-6370
              </Link>
              <br />
              <Link
                className={styles["footer-link"]}
                to="mailto:hello@omnifood.com"
              >
                hello@omnifood.com
              </Link>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className={styles["footer-heading"]}>Account</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Create account
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                iOS app
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Android app
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className={styles["footer-heading"]}>Company</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                About Omnifood
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                For Business
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Cooking Partners
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Careers
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className={styles["footer-heading"]}>Resources</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Recipe directory
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Help center
              </NavLink>
            </li>
            <li>
              <NavLink className={styles["footer-link"]} to={""}>
                Privacy & terms
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
