import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
