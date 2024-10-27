import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
