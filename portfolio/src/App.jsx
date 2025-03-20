import './App.css';
import About from './Components/About';
import Contactme from './Components/Contactme';
import Intro from './Components/Intro';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Techstacks from './Components/TechStacks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Techstacks />
      <Projects />
      <Contactme />
    </div>
  );
}

export default App;
