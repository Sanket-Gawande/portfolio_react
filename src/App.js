import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import SectionNavs from "./components/sidenavs/SectionNavs";
import About from "./components/About/About";
import Projects from "./components/projects/Projects";
import { HeaderContextProvider } from "./Context/HeadingContext";
// import Academics from "./components/Academics/Academics";
// import Messages from "./components/Messages/Messages";
import Contact from "./components/Contact/Contact";
// import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <HeaderContextProvider>
      <div className="App">
        <SectionNavs />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        {/* <Academics /> */}
        <Contact />
      </div>
    </HeaderContextProvider>
  );
}

export default App;
