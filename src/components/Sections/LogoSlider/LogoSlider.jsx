import clsx from "clsx";
import styles from "./LogoSlider.module.css";
import img1 from "../../../assets/logoSlider/amazon.svg";
import img2 from "../../../assets/logoSlider/costa.svg";
import img3 from "../../../assets/logoSlider/ebay.svg";
import img4 from "../../../assets/logoSlider/idea.svg";
import img5 from "../../../assets/logoSlider/msi.svg";
import img6 from "../../../assets/logoSlider/sketch.svg";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";


const LogoSlider = () => {

   const logos = [
      {
         img: img1,
      },
      {
         img: img2,
      },
      {
         img: img3,
      },
      {
         img: img4,
      },
      {
         img: img5,
      },
      {
         img: img6,
      },
   ];

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const breakPoint = 768;

      const handleState = () => {
         setIsMobile(window.innerWidth <= breakPoint ? true : false);
      }

      handleState(); // Set initial value..
      window.addEventListener("resize", handleState);

      return () => window.removeEventListener("resize", handleState);
   }, []);

   return (
      <>
         <section className={clsx(styles.testimonialsWrapper)}>
            <div className={clsx(styles.testimonials, "container")}>

               <div className={styles.heading}>
                  <p>Trusted By 20,000+ Clients</p>
                  <h2>They Trust Us.</h2>
               </div>

               {/* Using marquee instead of carousel for continuous, non-snapping animation */}

               <div className={styles.testimonialCardsWrapper}>
                  <div className={styles.testimonialCards}>
                     <Marquee
                        speed={20}
                        pauseOnHover
                        pauseOnClick
                        direction={isMobile ? "right" : "left"}
                        gradient
                        gradientWidth={60}
                     >
                        {
                           logos.map((obj, ind) => (
                              <div className={styles.card} key={ind}>
                                 <div className={styles.cardImg}>
                                    <img src={obj.img} alt="img" />
                                 </div>

                                 {/* <div className={styles.cardText}>
                                    <h3 className={styles.cardHeading}>{obj.name}</h3>
                                    <p className={styles.cardDesc}>{obj.desc}</p>
                                 </div> */}
                              </div>
                           ))
                        }
                     </Marquee>
                  </div>

                  <div className={styles.testimonialCards}>
                     <Marquee
                        speed={20}
                        pauseOnHover
                        pauseOnClick
                        direction={isMobile ? "left" : "right"}
                        gradient
                        gradientWidth={60}
                     >
                        {
                           logos.map((obj, ind) => (
                              <div className={styles.card} key={ind}>
                                 <div className={styles.cardImg}>
                                    <img src={obj.img} alt="img" />
                                 </div>

                                 {/* <div className={styles.cardText}>
                                    <h3 className={styles.cardHeading}>{obj.name}</h3>
                                    <p className={styles.cardDesc}>{obj.desc}</p>
                                 </div> */}
                              </div>
                           ))
                        }
                     </Marquee>
                  </div>
               </div>


            </div>
         </section>
      </>
   )
}

export default LogoSlider; 