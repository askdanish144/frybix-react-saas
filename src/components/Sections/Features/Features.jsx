import clsx from 'clsx';
import styles from './Features.module.css';
import img1 from '../../../assets/features/group-1.svg';
import img2 from '../../../assets/features/group-2.svg';
import img3 from '../../../assets/features/group-3.svg';
import { useLocation } from 'react-router-dom';

const Features = () => {
   const { pathname } = useLocation();
   const isFeatures = pathname === '/features';
   return (
      <>
         <section
            className={clsx(styles.features, 'container')}
            style={isFeatures ? { marginTop: '8rem', marginBottom: '4rem' } : {}}
         >

            <div className={clsx(styles.feature, "row gx-5 gap-5 gap-md-0 justify-content-between")}>
               <div className={clsx(styles.text, "col-md-6 order-last order-md-first")}>
                  <h2>Manage your tasks online easily.</h2>
                  <p>Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.</p>
               </div>

               <div className={clsx(styles.featureImg, "col-md-5")}>
                  <img src={img1} alt="img" />
               </div>
            </div>

            <hr className={styles.featureDivider}></hr>

            <div className={clsx(styles.feature, "row gx-5 justify-content-between")}>
               <div className={clsx(styles.text, "col-md-6 order-last")}>
                  <h2>keep track of all your progress.</h2>
                  <p>Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.</p>
               </div>

               <div className={clsx(styles.featureImg, "col-md-5")}>
                  <img src={img2} alt="img" />
               </div>
            </div>

            <hr className={styles.featureDivider}></hr>

            <div className={clsx(styles.feature, "row gx-5 gap-5 gap-md-0 justify-content-between")}>
               <div className={clsx(styles.text, "col-md-6 order-last order-md-first")}>
                  <h2>More connections, no more cancellations</h2>
                  <p>Pellentesque blandit augue facilisis malesuada interdum eleifend risus, commodo. Egestas senectus vehicula vel consectetur eu. Sit pulvinar urna diam lacus fringilla eu cursus.</p>
                  <button className={styles.featureBtn}>get started</button>
               </div>

               <div className={clsx(styles.featureImg, "col-md-5")}>
                  <img src={img3} alt="img" />
               </div>
            </div>

         </section>
      </>
   );
};

export default Features; 
