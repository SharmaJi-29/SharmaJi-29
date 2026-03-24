
import { motion } from 'framer-motion';
import { Database, LineChart, Cpu, Code2, Lightbulb } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    category: "Machine Learning & AI",
    icon: <Cpu size={32} />,
    skills: ["Deep Learning", "Neural Networks", "NLP", "Machine Learning", "TensorFlow", "PyTorch", "Scikit-Learn"]
  },
  {
    category: "Data Analysis",
    icon: <LineChart size={32} />,
    skills: ["Data Visualization", "Statistical Analysis", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Data Management",
    icon: <Database size={32} />,
    skills: ["SQL", "ETL Pipelines", "Data Preprocessing", "Data Warehousing", "NoSQL", "Big Data"]
  },
  {
    category: "Programming & Tools",
    icon: <Code2 size={32} />,
    skills: ["Python", "Jupyter Notebook", "Data Structure", "C/C++", "Git & GitHub", "REST APIs", "Cloud Services"]
  },
  {
    category: "Work Style",
    icon: <Lightbulb size={32} />,
    skills: ["Creativity", "Collaboration", "Time Management", "Attention to Detail"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <span className="section-subtitle">Core Capabilities</span>
      <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
      
      <div className="grid-2 skills-grid">
        {skillsData.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.03, rotateZ: index % 2 === 0 ? 1 : -1, y: -10 }}
            className="skill-card glass-panel"
            style={{ cursor: 'pointer' }}
          >
            <div className="skill-header">
              <motion.div 
                className="skill-icon-wrap"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {category.icon}
              </motion.div>
              <h3 className="skill-category">{category.category}</h3>
            </div>
            
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i} 
                  className="skill-tag" 
                  whileHover={{ scale: 1.15, backgroundColor: "var(--accent-tertiary)", color: "#000", y: -4 }}
                  style={{ display: "inline-block", cursor: "pointer", transition: "none" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="skill-bg-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
