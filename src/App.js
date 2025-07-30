import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
