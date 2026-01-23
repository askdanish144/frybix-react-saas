import clsx from 'clsx';
import styles from './OnePlatform.module.css';
import img from '../../../assets/onePlatform/one-platform.svg';
import cardImg1 from '../../../assets/onePlatform/1.svg';
import cardImg2 from '../../../assets/onePlatform/2.svg';
import cardImg3 from '../../../assets/onePlatform/3.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const OnePlatform = () => {
   const { pathname } = useLocation();
   const isValues = pathname === '/values';

   useEffect(() => {
      document.title = "FryBix - Values";
   }, []);

   return (
      <>
         <section className={styles.onePlatformWrap}>
            <div
               className={clsx(styles.onePlatform, "container")}
               style={isValues ? { marginTop: '8rem', marginBottom: '4rem' } : {}}
            >
               <h2>one platform for any business</h2>

               <div className={styles.onePlatformContent}>

                  <div className={styles.cards}>
                     <div className={styles.cardItem}>
                        <img src={cardImg1} alt="img" />
                        <div>
                           <h3>Appointment</h3>
                           <p>Many desktop publishing packages and web page editors now use for them.</p>
                        </div>
                     </div>
                     <div className={styles.cardItem}>
                        <img src={cardImg2} alt="img" />
                        <div>
                           <h3>class bookings</h3>
                           <p>Many desktop publishing packages and web page editors now use for them.</p>
                        </div>
                     </div>
                     <div className={styles.cardItem}>
                        <img src={cardImg3} alt="img" />
                        <div>
                           <h3>fast support</h3>
                           <p>Many desktop publishing packages and web page editors now use for them.</p>
                        </div>
                     </div>
                  </div>

                  <div className="d-none d-lg-block">
                     <img src={img} alt="img" className={styles.onePlatformImg} />
                  </div>

               </div>
            </div>
         </section>
      </>
   )
}

export default OnePlatform
