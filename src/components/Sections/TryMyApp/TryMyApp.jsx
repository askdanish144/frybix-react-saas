import clsx from 'clsx';
import styles from './TryMyApp.module.css';
import leftImg from '../../../assets/tryMyApp/left-graphic.svg';
import rightImg from '../../../assets/tryMyApp/right-graphic.svg';

const TryMyApp = () => {
   return (
      <>
         <section className={clsx(styles.tryMyAppWrap, "container-fluid")}>
            <div className={clsx(styles.tryMyApp, "container")}>
               <h2>Try FryBix For Free</h2>
               <p>Frybix is hub for managing productivity <br /> tasks professionaly and efficiently</p>
               <button className={styles.featureBtn}>Get FryBix App</button>
            </div>

            <div className={styles.leftRightGraphics}>
               <img className={styles.leftImg} src={leftImg} alt="img" />
               <img className={styles.rightImg} src={rightImg} alt="img" />
            </div>
         </section>
      </>
   )
}

export default TryMyApp
