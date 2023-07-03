import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const [showButton, setShowButton] = useState(false);
  // const upBtn = useRef();
  // gsap.to(upBtn.current, { autoAlpha: 1, duration: 1.5 });
  // useEffect(() => {
  //   const scrollBtnVisibility = () => {
  //     window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  //   };
  //   window.addEventListener("scroll", scrollBtnVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", scrollBtnVisibility);
  //   };
  // }, []);
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
