import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Experience from "./Components/Experience/Experience.jsx";
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from "./Components/Contact/Contact.jsx";

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />     
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
