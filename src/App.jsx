import { Outlet } from "react-router-dom"
import Footer from "./components/Layout/Footer/Footer"
import Navbar from "./components/Layout/Navbar/Navbar"
import HeroSection from "./components/Sections/HeroSection/HeroSection"
import LogoSlider from "./components/Sections/LogoSlider/LogoSlider"
import OnePlatform from "./components/Sections/OnePlatform/OnePlatform"
import InfoBar from "./components/Sections/InfoBar/InfoBar"
import Features from "./components/Sections/Festures/Features"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <HeroSection />
      <LogoSlider/>
      <OnePlatform />
      <InfoBar />
      <Features />
      {/* <Footer /> */}
    </>
  )
}

export default App
