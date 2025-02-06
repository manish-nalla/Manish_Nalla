import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Experience from "./Components/Experience/Experience.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />     
    </div>
  );
}

export default App;
