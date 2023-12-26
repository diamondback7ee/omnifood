import styles from "./Pricing.module.css";
import "../App.css";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className={styles["section-pricing"]}>
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols">
        <div className={styles["pricing-plan"]}>
          <header className={styles["plan-header"]}>
            <p className={styles["plan-name"]}>Starter</p>
            <p className={styles["plan-price"]}>
              <span>$</span>399
            </p>
            <p className={styles["plan-text"]}>
              per month. That's just $13 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Order times are between 11am and 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
          </ul>
          <div className={styles["plan-sign-up"]}>
            <Link to={""} className="btn btn--full">
              Start eating well
            </Link>
          </div>
        </div>
        <div className={styles["pricing-plan"]}>
          <header className={styles["plan-header"]}>
            <p className={styles["plan-name"]}>Complete</p>
            <p className={styles["plan-price"]}>
              <span>$</span>649
            </p>
            <p className={styles["plan-text"]}>
              per month. That's just $11 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>2 meals per day</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Order 24/7</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={styles["plan-sign-up"]}>
            <Link to={""} className="btn btn--full">
              Start eating well
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
