import styles from './BusinessSegments.module.css';
import clsx from 'clsx';
import cardImg1 from '../../../assets/onePlatform/1.svg';
import cardImg2 from '../../../assets/onePlatform/2.svg';
import cardImg3 from '../../../assets/onePlatform/3.svg';
import { useLocation } from 'react-router-dom';

const cardsData = [
   {
      img: cardImg1,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
   {
      img: cardImg2,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
   {
      img: cardImg3,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
   {
      img: cardImg3,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
   {
      img: cardImg2,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
   {
      img: cardImg1,
      heading: "Appointment",
      para: "Many desktop publishing packages and web page editors now use for them.",
   },
];

const BusinessSegments = () => {
   const { pathname } = useLocation();
   const isSegments = pathname === '/segments';

   return (
      <>
         <section
            className={(styles.businessSegments)}
            style={isSegments ? { marginTop: '8rem', marginBottom: '4rem' } : {}}
         >
            <div className="container">
               <h2>Frybix has the ability to serve any <br /> business segment</h2>
               <div className={clsx(styles.cards, "row g-3")}>

                  {
                     cardsData.map((obj, ind) => (
                        <div className="col-4" key={ind}>
                           <div className={styles.cardItem}>
                              <img src={obj.img} alt="img" />
                              <div>
                                 <h3>{obj.heading}</h3>
                                 <p>{obj.para}</p>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </section>
      </>
   )
}

export default BusinessSegments; 