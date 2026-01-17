import { Link, useLocation } from 'react-router-dom';
import styles from "./PageNotFound.module.css";
import Navbar from '../../components/Layout/Navbar/Navbar';
import Footer from '../../components/Layout/Footer/Footer';

const PageNotFound = () => {
   const { pathname } = useLocation();
   const is404 = pathname === '/contact';
   const handleClick = () => {
      window.history.back();
   }
   return (
      <>
         <Navbar />
         <section className={styles.pageNotFound}>
            <div className={styles.container}>
               <div className={styles.content}>
                  <div className={styles.errorCode}>
                     <h1>404</h1>
                  </div>

                  <div className={styles.textContent}>
                     <h2>Page Not Found</h2>
                     <p>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
                     {
                        is404 && (
                           <p>
                              This page is intentionally unavailable
                              <br />
                              enjoy the custom 404 page 😁
                           </p>
                        )
                     }
                  </div>

                  <div className={styles.actions}>
                     <Link to="/" className={styles.primaryBtn}>
                        Back to Home
                     </Link>
                     <button
                        onClick={handleClick}
                        className={styles.secondaryBtn}
                     >Go Back</button>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default PageNotFound; 