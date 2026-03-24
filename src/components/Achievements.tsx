import { motion } from 'framer-motion';
import { Mic, ExternalLink, Code, Trophy } from 'lucide-react';
import './Cards.css';

const achievementsData = [
  {
    title: "ICMSCI-2026 Delhi",
    issuer: "Data Science, Statistics & Machine Learning",
    date: "22 Feb 2026",
    description: "Presented AI/ML research paper “AI-Powered Academic Assistant” at ICMSCI-2026 International Conference, University of Delhi, demonstrating applications of Artificial Intelligence in intelligent educational systems.",
    icon: <Mic size={28} />,
    link: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_icmsci2026-artificialintelligence-machinelearning-activity-7439347648127647744-HFwX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "March 2026",
    description: "Successfully executed complex logic paradigms and applied robust analytical capabilities to resolve intensive computational coding challenges.",
    icon: <Trophy size={28} />,
    link: "https://www.hackerrank.com/certificates/850324145657"
  },
  {
    title: "Python",
    issuer: "HackerRank",
    date: "June 2024",
    description: "Demonstrated advanced proficiency in Python programming by mastering advanced logic, dynamic data structures, and algorithmic object-oriented design.",
    icon: <Code size={28} />,
    link: "https://www.hackerrank.com/certificates/95beec152506"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <span className="section-subtitle">Recognition</span>
      <h2 className="section-title">Conferences & <span className="gradient-text">Achievements</span></h2>

      <div className="cards-grid">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', bounce: 0.5 }}
            whileHover={{ y: -12, scale: 1.03, rotateZ: index % 2 === 0 ? 1 : -1 }}
            className="item-card glass-panel"
            style={{ cursor: 'pointer' }}
          >
            <motion.div 
              className="item-icon-container"
              whileHover={{ rotate: 360, scale: 1.2, backgroundColor: "var(--accent-primary)" }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {item.icon}
            </motion.div>
            <h3 className="item-title">{item.title}</h3>
            <h4 className="item-issuer">{item.issuer}</h4>
            <p className="item-description">{item.description}</p>

            <div className="item-footer">
              <span className="item-date">{item.date}</span>
              {item.link && (
                <motion.a whileHover={{ scale: 1.05, color: "var(--accent-tertiary)" }} href={item.link} target="_blank" rel="noreferrer" className="item-link" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  View Certificate <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
