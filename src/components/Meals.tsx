import styles from "./Meals.module.css";
import "../App.css";
import { Link } from "react-router-dom";

function Meals() {
  return (
    <section className={styles["section-meals"]}>
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <div className={styles.meal}>
          <img
            src="img/meals/meal-1.jpg"
            alt="Japanese gyozas"
            className={styles["meal-img"]}
          />
          <div className={styles["meal-content"]}>
            <div className={styles["meal-tag"]}>
              <span className={`${styles.tag} ${styles["tag--vegetarian"]}`}>
                Vegetarian
              </span>
            </div>
            <p className={styles["meal-title"]}>Japanese Gyozas</p>
            <ul className={styles["meal-attributes"]}>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="flame-outline"
                ></ion-icon>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  Nutriscore &reg; <strong>74</strong>
                </span>
              </li>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="star-outline"
                ></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.meal}>
          <img
            src="img/meals/meal-2.jpg"
            alt="Avocado salad"
            className={styles["meal-img"]}
          />
          <div className={styles["meal-content"]}>
            <div className={styles["meal-tag"]}>
              <span className={`${styles.tag} ${styles["tag--vegan"]}`}>
                Vegan
              </span>
              <span className={`${styles.tag} ${styles["tag--paleo"]}`}>
                Paleo
              </span>
            </div>
            <p className={styles["meal-title"]}>Avocado Salad</p>
            <ul className={styles["meal-attributes"]}>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="flame-outline"
                ></ion-icon>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  Nutriscore &reg; <strong>92</strong>
                </span>
              </li>
              <li className={styles["meal-attribute"]}>
                <ion-icon
                  className={styles["meal-icon"]}
                  name="star-outline"
                ></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.diet}>
          <h3 className={`heading-tertiary`}>Works with any diet:</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles["all-recipes"]}`}>
        <Link to={""} className={styles.link}>
          See all recipes &rarr;
        </Link>
      </div>
    </section>
  );
}

export default Meals;
