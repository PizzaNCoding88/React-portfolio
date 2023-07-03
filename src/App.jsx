import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <HeroSection />
      <Presentation />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
