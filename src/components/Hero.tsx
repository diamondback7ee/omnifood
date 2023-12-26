import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import "../App.css";

function Hero() {
  return (
    <section className={styles["section-hero"]}>
      <div className={styles.hero}>
        <div className={styles["hero-text-box"]}>
          <h1 className={`heading-primary`}>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles["hero-description"]}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Link to={"/"} className="btn btn--full margin-right-sm">
            Start eating well
          </Link>
          <Link to={"/"} className={`btn ${styles["btn--outline"]}`}>
            Learn more &darr;{" "}
          </Link>
          <div className={styles["delivered-meals"]}>
            <div className={styles["delivered-faces"]}>
              <img
                src="img/customers/customer-1.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
              <img
                src="img/customers/customer-2.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
              <img
                src="img/customers/customer-3.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
              <img
                src="img/customers/customer-4.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
              <img
                src="img/customers/customer-5.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
              <img
                src="img/customers/customer-6.jpg"
                alt="Customer photo"
                className={styles["delivered-face"]}
              />
            </div>
            <p className={styles["delivered-text"]}>
              <span className={styles["delivered-text-quantity"]}>
                250,000+
              </span>{" "}
              meals delivered last year!
            </p>
          </div>
        </div>
        <div className={styles["hero-img-box"]}>
          <img
            src="img/hero.png"
            alt="Woman enjoying a meal, and images of cooked meals"
            className={styles["hero-img"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
