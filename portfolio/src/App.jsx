import './App.css';
import About from './Components/About';
import Intro from './Components/Intro';
import Nav from './Components/Nav';
import Techstacks from './Components/TechStacks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Techstacks />
    </div>
  );
}

export default App;
