import HeroSection from "../components/Sections/HeroSection/HeroSection"
import InfoBar from "../components/Sections/InfoBar/InfoBar"
import LogoSlider from "../components/Sections/LogoSlider/LogoSlider"
import OnePlatform from "../components/Sections/OnePlatform/OnePlatform"
import Features from "../components/Sections/Features/Features"
import BusinessSegments from "../components/Sections/BusinessSegments/BusinessSegments"
import TryMyApp from "../components/Sections/TryMyApp/TryMyApp"

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <LogoSlider />
         <OnePlatform />
         <InfoBar />
         <Features />
         <BusinessSegments />
         <TryMyApp />
      </>
   )
}

export default HomePage; 