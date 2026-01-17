import { Outlet } from "react-router-dom"
import Footer from "./components/Layout/Footer/Footer"
import Navbar from "./components/Layout/Navbar/Navbar"
import ScrollToTop from "./components/Layout/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
