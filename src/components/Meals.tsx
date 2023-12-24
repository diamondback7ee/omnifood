import styles from "./Meals.module.css";
import "../App.css";

function Meals() {
  return (
    <section className={styles["section-meals"]}>
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols">
        <div className={styles.meal}>
          <img
            src="img/meals/meal-1.jpg"
            alt="Japanese gyozas"
            className={styles["meal-img"]}
          />
          <span className={styles.tag}>Vegetarian</span>
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
        <div className={styles.meal}>Meals</div>
        <div className={styles.list}>List of diets</div>
      </div>
    </section>
  );
}

export default Meals;
