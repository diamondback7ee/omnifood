import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles["section-hero"]}>
        <div className={styles.hero}>
          <div className={styles["hero-text-box"]}>
            <h1 className={styles["heading-primary"]}>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className={styles["hero-description"]}>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <Link to={"/"} className={styles.btn}>
              Start eating well
            </Link>
            <Link to={"/"}>Learn more &darr; </Link>
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
    </>
  );
}

export default Home;
