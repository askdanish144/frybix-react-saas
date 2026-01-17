import styles from "./Navbar.module.css"
import logo from "../../../assets/logo/logo.svg";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);


  const handlePageScroll = (path) => {
    if (pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    setActive(false);
  }

  //Locking scroll when Hamburger is opened..
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  // Closing Hamburger on Escape key..
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    })
  }, [active]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header>
        <nav 
          className={clsx(scrolled && isHome ? styles.scrolled : null)}
          style={!isHome ? { backgroundColor: "var(--white)" } : {}}
        >
          
          <Link className={styles.logo} to="/" onClick={() => handlePageScroll('/')}>
            <img src={logo} alt="logo" />
            <h2>FryBix</h2>
          </Link>

          <ul className={clsx(styles.navLinks, active && styles.menuOpen)}>
            <li><Link
              to="/"
              style={!scrolled && isHome ? { color: "var(--white)" } : {}
              }
              onClick={() => handlePageScroll('/')}>Home</Link>
            </li>

            <li><Link
              to="/features"
              style={!scrolled && isHome ? { color: "var(--white)" } : {}
              }
              onClick={() => handlePageScroll('/features')}>Features</Link>
            </li>

            <li><Link
              to="/segments"
              style={!scrolled && isHome ? { color: "var(--white)" } : {}
              }
              onClick={() => handlePageScroll('/segments')}>Segments</Link>
            </li>

            <li><Link
              to="/values"
              style={!scrolled && isHome ? { color: "var(--white)" } : {}
              }
              onClick={() => handlePageScroll('/values')}>Values</Link>
            </li>

            <li><Link
              to="/contact"
              className={clsx(!scrolled && isHome ? styles.contact : styles.contactScrolled)}>Contact</Link>
            </li>
          </ul>

          <span onClick={() => setActive(prev => !prev)} id={styles.menuIcon}>
            <i className={clsx(active ? "ri-close-large-line" : "ri-menu-3-line", active ? styles.colorChange : "")}></i>
          </span>

          {/* Backdrop with transition */}
          <div className={clsx(styles.backdrop, active ? styles.show : "")}
            onClick={() => setActive(false)}
          />

        </nav>
      </header>
    </>
  )
}

export default Navbar
