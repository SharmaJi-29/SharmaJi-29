
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    name: "AI-Powered Academic Assistant",
    description: "Built an intelligent academic assistant using Retrieval-Augmented Generation (RAG) architecture and advanced NLP models to drastically enhance contextual student learning algorithms.",
    date: "Sep 2025 – Jan 2026",
    language: "RAG Based",
    html_url: "https://github.com/SharmaJi-29/AI-Powered-Academic-Assistant"
  },
  {
    name: "Enhancing IoT Security Through Emotion Detection",
    description: "Developed an AI-powered Internet of Things (IoT) surveillance system leveraging deep emotion detection models to preemptively identify unauthorized access within sensitive edge environments.",
    date: "Jan 2025 – Jul 2025",
    language: "IoT / AI",
    html_url: "https://github.com/SharmaJi-29/Enhancing-IoT-Security-by-Using-Emotion-Detection"
  },
  {
    name: "Automatic Answer Checker",
    description: "Engineered robust and accurate OCR-based handwritten evaluation systems, utilizing advanced machine learning classification to perform unbiased AI-driven academic grading.",
    date: "July 2024 – Dec 2024",
    language: "Artificial Intelligence",
    html_url: "https://github.com/SharmaJi-29/Automatic-Answer-Checker"
  },
  {
    name: "CodeBidz Auction Website",
    description: "Programmed a highly responsive, real-time web auction platform capable of securely handling high-concurrency interactive bidding while pushing live bid updates and notifications continuously.",
    date: "March 2026",
    language: "Web Development",
    html_url: "https://github.com/yuvraj-25D/CodeBidz-Auction-Websiite",
    live_url: "https://code-bidz-auction-websiite.vercel.app/auth.html"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <span className="section-subtitle">Portfolio</span>
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

      <div className="grid-2 projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -15, scale: 1.02, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
            className="project-card glass-panel"
            style={{ cursor: "pointer", transformStyle: "preserve-3d" }}
          >
            <div className="project-content" style={{ transform: "translateZ(30px)" }}>
              <div className="project-header">
                <motion.div className="p-icon-wrapper" whileHover={{ rotate: 180, scale: 1.2 }} transition={{ type: "spring" }}>
                  <Activity className="project-icon" size={24} />
                </motion.div>
                <div className="project-links">
                  <motion.a whileHover={{ scale: 1.2, color: "var(--accent-tertiary)" }} href={project.html_url} target="_blank" rel="noreferrer" className="p-link" title="Source Code">
                    <Github size={20} />
                  </motion.a>
                  {project.live_url && (
                    <motion.a whileHover={{ scale: 1.2, color: "var(--accent-tertiary)" }} href={project.live_url} target={project.live_url !== "#" ? "_blank" : "_self"} rel="noreferrer" className="p-link" title="Live Preview">
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-date" style={{ fontSize: "0.85rem", color: "var(--accent-tertiary)", opacity: 0.8, marginBottom: "0.8rem", fontWeight: 600 }}>{project.date}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <motion.span whileHover={{ scale: 1.1, backgroundColor: "var(--accent-primary)", color: "#fff" }} className="project-tech glass-panel" style={{ cursor: "pointer", transition: "none" }}>{project.language}</motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
