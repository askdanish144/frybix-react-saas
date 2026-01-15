import clsx from 'clsx';
import styles from './InfoBar.module.css';

const InfoBar = () => {
   return (
      <>
         <section>
            <div className={clsx(styles.infoBarWrapper, 'container')}>

               <div className={styles.infoBar}>
                  <div className={styles.info}>
                     <h3>110+</h3>
                     <p>Automation templates for creating your campaigns quickly</p>
                  </div>
                  <div className={styles.info}>
                     <h3>4M</h3>
                     <p>Automation templates for creating your campaigns quickly</p>
                  </div>
                  <div className={styles.info}>
                     <h3>98.95%</h3>
                     <p>Automation templates for creating your campaigns quickly</p>
                  </div>
               </div>

            </div>
         </section>
      </>
   )
}

export default InfoBar
