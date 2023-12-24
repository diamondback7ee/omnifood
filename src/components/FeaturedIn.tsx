import styles from "./FeaturedIn.module.css";
import "../App.css";

function FeaturedIn() {
  return (
    <section className={styles["section-featured"]}>
      <div className={`container`}>
        <h2 className={styles["heading-featured-in"]}>As featured in</h2>
        <div className={styles.logos}>
          <img
            src="img/logos/techcrunch.png"
            alt="Techcrunch logo"
            className={styles.logo}
          />
          <img
            src="img/logos/business-insider.png"
            alt="Business Insider logo"
            className={styles.logo}
          />
          <img
            src="img/logos/the-new-york-times.png"
            alt="The New York Times logo"
            className={styles.logo}
          />
          <img
            src="img/logos/forbes.png"
            alt="Forbes logo"
            className={styles.logo}
          />
          <img
            src="img/logos/usa-today.png"
            alt="USA Today logo"
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
