import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import Achievements from './components/Achievements.tsx';
import Education from './components/Education.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <div className="app-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
      </div>
      <Footer />
    </>
  );
}

export default App;
