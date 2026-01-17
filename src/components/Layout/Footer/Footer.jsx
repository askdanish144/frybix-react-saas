import clsx from "clsx";
import styles from "./Footer.module.css"
import logo from "../../../assets/logo/logo.svg";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const Footer = () => {
  const { pathname } = useLocation();
  const newsLetterRef = useRef(); 

  const handleOnClick = (link) => {
    if (pathname === link) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    newsLetterRef.current.value = ""; 
  }

  return (
    <>
      <footer className="container-fluid">
        <div className="container">

          <div className={clsx(styles.footerContent, "row row-cols-5")}>

            <div className="col">
              <div className={styles.logoAndContact}>

                <div className={styles.logo}>
                  <img src={logo} alt="logo" />
                  <h3>FryBix</h3>
                </div>

                <div className={styles.contacts}>
                  <span>
                    <IoMdMail className={styles.contactIcons} />
                    <p>Help@frybix.com</p>
                  </span>

                  <span>
                    <FaPhone className={styles.contactIcons} />
                    <p>+92 123 4567890</p>
                  </span>
                </div>


              </div>
            </div>

            <div className="col">

              <div className={styles.links}>
                <h3>Links</h3>
                <ul className={styles.listList}>
                  <li><Link onClick={() => handleOnClick('/')} to="/">Home</Link></li>
                  <li><Link onClick={() => handleOnClick('/features')} to="/features">Features</Link></li>
                  <li><Link onClick={() => handleOnClick('/segments')} to="/segments">Segments</Link></li>
                  <li><Link onClick={() => handleOnClick('/values')} to="/contact">Values</Link></li>
                </ul>
              </div>

            </div>

            <div className="col">
              <div className={styles.legalLinks}>
                <h3>Legal</h3>
                <ul className={styles.listList}>
                  <li><Link to="/">Terms Of Use</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className={styles.productLinks}>
                <h3>Product</h3>
                <ul className={styles.listList}>
                  <li><Link to="/">Take Tour</Link></li>
                  <li><Link to="/">Live Chat</Link></li>
                  <li><Link to="/">Reviews</Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className={styles.newsLetter}>
                <h3>NewsLetter</h3>
                <form className={styles.mailInput} onSubmit={handleSubmit}>
                  <input type="email" placeholder="user@example.com" ref={newsLetterRef}/>
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>

          </div>

          <hr className={styles.footerDivider} />

          <div className="row">
            <span className={styles.copyRight}>
              <p>
                Copyright {new Date().getFullYear()} <a href="#">Frybix</a> inc. all rights reserved
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer; 