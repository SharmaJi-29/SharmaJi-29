import { motion } from 'framer-motion';
import { User, Code, Brain } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <span className="section-subtitle">Introduction</span>
      <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      
      <div className="about-grid grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-text glass-panel"
        >
          <p>
            I am a Data Analyst and AI Engineer passionate about transforming raw data into actionable intelligence. With a rigorous background in machine learning algorithms and statistical analysis, I specialize in building scalable, intelligent solutions that solve complex real-world problems.
          </p>
          <p>
            My journey bridges the gap between sophisticated data engineering and innovative artificial intelligence. I enjoy creating predictive models, optimizing data pipelines, and architecting systems that push the boundaries of modern technology.
          </p>
          <p>
            When I am not coding or analyzing datasets, I am constantly researching the latest advancements in AI to stay at the cutting edge of the industry.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-highlights"
        >
          <div className="highlight-card glass-panel">
            <Brain className="highlight-icon" size={32} />
            <div>
              <h3>AI & Machine Learning</h3>
              <p>Developing predictive models, natural language processing tools, and intelligent automation systems.</p>
            </div>
          </div>
          
          <div className="highlight-card glass-panel">
            <Code className="highlight-icon" size={32} />
            <div>
              <h3>Data Engineering</h3>
              <p>Designing sophisticated pipelines to clean, manage, and extract value from vast datasets.</p>
            </div>
          </div>

          <div className="highlight-card glass-panel">
            <User className="highlight-icon" size={32} />
            <div>
              <h3>Problem Solver</h3>
              <p>Committed to untangling complex challenges and delivering optimized, impactful results.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
