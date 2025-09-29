import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Project from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Particle from './components/Particle.jsx';

function App() {
 

  return (
    <>
    <div className="relative overflow-hidden">
      {/* Navbar */}
      <Particle/>
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
