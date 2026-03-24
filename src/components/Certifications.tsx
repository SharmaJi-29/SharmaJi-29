import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Cards.css';
import './Timeline.css';

const certificationsData = [
  {
    title: "Data Science Professional Certification",
    issuer: "Oracle Cloud Infrastructure",
    date: "Sept 2025 – Oct 2025",
    description: "Architected, managed, and deployed robust data science pipelines and high-performance machine learning models natively on Oracle Cloud.",
    link: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_oraclecertified-oraclecloud-oci-activity-7421495356301094912-Fhh_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    title: "Computer Vision",
    issuer: "NPTEL",
    date: "Aug 2025 – Nov 2025",
    description: "Mastered core visual algorithms including image processing techniques, advanced object detection models, and deep neural network deployment.",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs143/Course/NPTEL25CS143S125300027710849752.pdf"
  },
  {
    title: "Machine Learning (Top Performer – 92%)",
    issuer: "Internshala",
    date: "Aug 2024 – Sep 2024",
    description: "Engineered robust predictive algorithms and comprehensive deep learning data-processing pipelines, securing a Top Performer 92% evaluation.",
    link: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_internshala-machinelearning-python-activity-7245466417028841473-_1z6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jun 2024 – Jul 2024",
    description: "Certified proficiency in advanced data wrangling methodologies, statistical correlation analysis, and dynamic enterprise decision-visualization.",
    link: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_dataanalytics-cisconetworkingacademy-activity-7270031720865763331-5Aov/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    title: "Industry Job Simulations",
    issuer: "BCG, Accenture, Tata, Goldman Sachs",
    date: "Jun 2024 – Aug 2024",
    description: "Executed intensive real-world corporate data simulations analyzing complex financial models, technical IT consulting, and enterprise databases.",
    link: "#",
    sublinks: [
      { name: "Tata", url: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_im-happy-to-share-that-ive-obtained-a-new-activity-7212168564894572544-GldT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ" },
      { name: "Accenture", url: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_im-happy-to-share-that-ive-obtained-a-new-activity-7212168851482927104-I5vv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ" },
      { name: "Goldman Sachs", url: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_forage-certificate-activity-7225205673381261312-xQ1h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ" },
      { name: "BCG", url: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_forage-certificate-activity-7236440218134790146-VdrH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ" }
    ]
  }
];

const Certifications = () => {
  const [selectedSublinks, setSelectedSublinks] = useState<{ name: string, url: string }[] | null>(null);

  return (
    <section id="certifications" className="section">
      <span className="section-subtitle">Credentials</span>
      <h2 className="section-title">Professional <span className="gradient-text">Certifications</span></h2>

      <div className="cards-grid">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
            whileHover={{ y: -15, scale: 1.03, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
            className="item-card glass-panel"
            style={{ cursor: 'pointer', transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="item-icon-container"
              whileHover={{ rotate: 360, scale: 1.25, backgroundColor: "var(--accent-tertiary)" }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{ transform: "translateZ(30px)" }}
            >
              <Award size={28} />
            </motion.div>
            <h3 className="item-title" style={{ transform: "translateZ(20px)" }}>{cert.title}</h3>
            <h4 className="item-issuer" style={{ transform: "translateZ(20px)" }}>{cert.issuer}</h4>
            <p className="item-description" style={{ transform: "translateZ(20px)" }}>{cert.description}</p>

            <div className="item-footer" style={{ transform: "translateZ(30px)" }}>
              <span className="item-date">{cert.date}</span>
              {cert.sublinks ? (
                <motion.button
                  whileHover={{ scale: 1.05, color: "var(--accent-primary)" }}
                  onClick={() => setSelectedSublinks(cert.sublinks)}
                  className="item-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', outline: 'none', padding: 0 }}
                >
                  View Credential <ExternalLink size={16} />
                </motion.button>
              ) : (
                <motion.a whileHover={{ scale: 1.05, color: "var(--accent-primary)" }} href={cert.link} target="_blank" rel="noreferrer" className="item-link">
                  View Credential <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSublinks && (
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}
            onClick={() => setSelectedSublinks(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ background: 'rgba(15, 23, 42, 0.95)', padding: '2.5rem', borderRadius: '15px', border: '1px solid rgba(59, 130, 246, 0.3)', width: '90%', maxWidth: '400px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Select <span className="gradient-text">Credential</span></h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {selectedSublinks.map((sub, i) => (
                  <a key={i} href={sub.url} target="_blank" rel="noreferrer" className="cert-btn" style={{ width: '100%', justifyContent: 'center', margin: 0, boxSizing: 'border-box' }}>
                    {sub.name} <ExternalLink size={16} />
                  </a>
                ))}
              </div>
              <button
                className="cert-btn"
                style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444', boxSizing: 'border-box', cursor: 'pointer' }}
                onClick={() => setSelectedSublinks(null)}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
