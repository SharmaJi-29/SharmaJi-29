
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="badge glass-panel">
            <Terminal size={14} className="badge-icon" />
            <span>AI Engineer</span>
            <span className="badge-divider">|</span>
            <Database size={14} className="badge-icon" />
            <span>Data Analyst</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mrityunjay</span><br />
            Transforming Data into <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="hero-description">
            Specializing in Artificial Intelligence, Machine Learning, and Advanced Data Analytics. 
            I build intelligent systems that solve complex problems and drive innovation.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="https://github.com/SharmaJi-29" target="_blank" rel="noreferrer" className="btn-secondary glass-panel">
              GitHub Profile <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          <div className="image-glow"></div>
          <img src={heroBg} alt="AI & Data Science" className="hero-image glass-panel" />
          
          <div className="floating-card card-1 glass-panel">
            <div className="fc-icon">🧠</div>
            <div className="fc-text">
              <span className="fc-title">AI Models</span>
              <span className="fc-stat">99.8% Acc</span>
            </div>
          </div>
          
          <div className="floating-card card-2 glass-panel">
            <div className="fc-icon">📊</div>
            <div className="fc-text">
              <span className="fc-title">Data Analytics</span>
              <span className="fc-stat">Real-time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
