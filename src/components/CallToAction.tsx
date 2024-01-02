import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles["section-cta"]}>
      <div className={`container`}>
        <div className={styles.cta}>
          <div className={styles["cta-text-box"]}>
            <h2 className={`heading-secondary ${styles["heading-secondary"]}`}>
              Get your first meal for free!
            </h2>
            <p className={styles["cta-text"]}>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form action="#" className={styles["cta-form"]}>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="where">Where did you hear from us?</label>
                <select name="" id="where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className={styles["cta-img-box"]}
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
