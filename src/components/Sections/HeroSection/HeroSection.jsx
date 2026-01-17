import styles from "./HeroSection.module.css"
import heroDashboard from '../../../assets/hero/saas-dashboard.svg';
import customers from '../../../assets/hero/customers.svg';
import heroBgShape from '../../../assets/hero/heroBgShape.svg';
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroSection = () => {

  const newsLetterRef = useRef();
  const handleOnSubmit = () => {
    console.log(newsLetterRef.current.value);
    newsLetterRef.current.value = "";
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBgShape}>
          <img src={heroBgShape} alt="img" />
        </div>
        <div className={clsx(styles.heroContent, "container")}>

          <div className={clsx(styles.heroText, 'col-lg-6 col-12')}>
            <h1>simplified <br />productivity <br />app for all.</h1>
            <p className={styles.heroDesc}>frybix is a hub for managing productivity tasks professionaly and efficiently</p>

            <div className={styles.mailSection}>
              <input type="email" placeholder="user@example.com" ref={newsLetterRef} />
              <button type="submit" onClick={handleOnSubmit}>
                <FaArrowRight />
              </button>
            </div>

            <div className={styles.heroContact}>
              already using frybix? <Link to="/contact">Contact</Link>
            </div>

            <div className={styles.ratingSection}>

              <span className={styles.customers}>
                <img src={customers} alt="img" />
                <div>
                  <h3>2,000</h3>
                  <p>Happy Customers</p>
                </div>
              </span>
              <span className={styles.border}></span>

              <span className={styles.rating}>
                <h3>4.9/5</h3>
                <span className={styles.ratingStarsWrap}>
                  <span className={styles.ratingStars}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                  <p>Rating</p>
                </span>

              </span>

            </div>

          </div>

        </div>

        <div className={clsx(styles.heroImage, 'd-lg-block d-none')}>
          <img src={heroDashboard} alt="img" />
        </div>

      </section>
    </>
  )
}

export default HeroSection
