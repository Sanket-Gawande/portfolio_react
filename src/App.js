import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Home2 from "./components/Home2/Home";
import Skills from "./components/skills/Skills";
import SectionNavs from "./components/sidenavs/SectionNavs";
import About from "./components/About/About";
import Projects from "./components/projects/Projects";
import { HeaderContextProvider } from "./Context/HeadingContext";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <HeaderContextProvider>
      <div className="App">
        <SectionNavs />
        <Navbar />
        <Home2 />
        <About />
        <Projects />
        <Skills />
        {/* <Academics /> */}
        <Contact />
        <Footer />
      </div>
    </HeaderContextProvider>
  );
}

export default App;
