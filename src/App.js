import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import SectionNavs from "./components/SectionNavs";

function App() {
  return (
    <div className="App">
      <SectionNavs />
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
