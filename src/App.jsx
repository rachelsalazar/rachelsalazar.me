import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu"
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app" menuOpen={menuOpen} setMenuOpen={setMenuOpen} onClick={() => menuOpen && setMenuOpen(false)}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
