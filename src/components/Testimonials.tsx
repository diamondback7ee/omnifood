import styles from "./Testimonials.module.css";
import "../App.css";

function Testimonials() {
  return (
    <section className={styles["section-testimonials"]}>
      <div className={styles["testimonials-container"]}>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className={styles.testimonials}>
          <figure className={styles.testimonial}>
            <img
              src="img/customers/dave.jpg"
              alt="Photo of customer Dave Bryson"
              className={styles["testimonial-img"]}
            />
            <blockquote className={styles["testimonial-text"]}>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className={styles["testimonial-name"]}>&mdash; Dave Bryson</p>
          </figure>
          <figure className={styles.testimonial}>
            <img
              src="img/customers/ben.jpg"
              alt="Photo of customer Ben Hadley"
              className={styles["testimonial-img"]}
            />
            <blockquote className={styles["testimonial-text"]}>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className={styles["testimonial-name"]}>&mdash; Ben Hadley</p>
          </figure>
          <figure className={styles.testimonial}>
            <img
              src="img/customers/steve.jpg"
              alt="Photo of customer Steve Miller"
              className={styles["testimonial-img"]}
            />
            <blockquote className={styles["testimonial-text"]}>
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className={styles["testimonial-name"]}>&mdash; Steve Miller</p>
          </figure>
          <figure className={styles.testimonial}>
            <img
              src="img/customers/hannah.jpg"
              alt="Photo of customer Hannah Smith"
              className={styles["testimonial-img"]}
            />
            <blockquote className={styles["testimonial-text"]}>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className={styles["testimonial-name"]}>&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className={styles.gallery}>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-1.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-2.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-3.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-4.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-5.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-6.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-7.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-8.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-9.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-10.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-11.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className={styles["gallery-item"]}>
          <img
            src="img/gallery/gallery-12.jpg"
            alt="Photo of beautifully arranged food"
          />
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
