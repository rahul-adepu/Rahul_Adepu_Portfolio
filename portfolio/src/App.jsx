import { useRef } from 'react';
import './App.css';
import About from './Components/About';
import Contactme from './Components/Contactme';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Techstacks from './Components/TechStacks';
import ScrollToTopButton from './Components/Scroll';

function App() {

  const divRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = divRef.current.scrollTop;
    console.log(scrollTop);
  };

  return (
    <div className="App">
      <Nav />
      <Intro />
      <About ref={divRef} func={handleScroll} />
      <Techstacks />
      <Projects />
      <Contactme />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
