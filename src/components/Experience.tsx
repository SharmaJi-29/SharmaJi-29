import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    role: "Legal Research Intern",
    company: "IoT Security Research | Guru Ghasidas University, Bilaspur",
    date: "Jan 2025 - Jun 2025",
    description: [
      "Engineered and executed advanced research models focusing on AI-based Internet of Things (IoT) security.",
      "Designed algorithms integrating emotion detection systems to identify behavioral anomalies at edge networks.",
      "Ensured secure and robust IoT connectivity against evolving vulnerabilities through analytical modeling."
    ],
    certificateLink: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_internship-internshipcompletion-gurughasidasvishwavidyalaya-activity-7421493024767193089-Fzui/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    role: "Python Programming Intern",
    company: "MotionCut (AICTE)",
    date: "Sep 2024 - Oct 2024",
    description: [
      "Designed, developed, and optimized a suite of high-performance Python applications.",
      "Implemented complex algorithmic programs to solve logic bottlenecks.",
      "Strictly adhered to AICTE coding standards and software development lifecycles."
    ],
    certificateLink: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_motioncut-aicte-python-activity-7247916020441440256-ZB0p/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    role: "Data Science Intern",
    company: "Oasis Infobyte",
    date: "Aug 2024 - Sep 2024",
    description: [
      "Engineered end-to-end machine learning pipelines for predictive operations.",
      "Developed, trained, and fine-tuned predictive and classification models to generate actionable business insights.",
      "Performed rigorous hyperparameter optimization to maximize model accuracy."
    ],
    certificateLink: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_oasisinfobyte-datascience-activity-7247915511710130176-Iq3h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    role: "Data Analysis Intern",
    company: "Cognifyz",
    date: "Jul 2024 - Aug 2024",
    description: [
      "Led comprehensive exploratory data analysis (EDA) initiatives on extensive structured datasets.",
      "Executed robust data preprocessing techniques and statistical analyses to extract valuable trends.",
      "Created dynamic, insightful visual dashboards to communicate complex findings to stakeholders."
    ],
    certificateLink: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_cognifyztechnologies-dataanalysis-python-activity-7236443424441163778-66W_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  },
  {
    role: "Data Science Intern",
    company: "CodSoft",
    date: "Jun 2024 - Jul 2024",
    description: [
      "Deployed machine learning models dynamically trained on real-world, high-volume datasets.",
      "Automated the analysis of massive data streams via optimized Python engineering.",
      "Actively drove intelligent data-oriented solutions through deep predictive modeling."
    ],
    certificateLink: "https://www.linkedin.com/posts/mrityunjay-sharma-36a401266_datascience-internship-python-activity-7223560118280372224-0Quc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEzGMIBo0Q80UsQ36jzU1qexcnl6jkHhaQ"
  }
];

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += 1; 
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 1)) {
          scrollContainer.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="experience" className="section">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
      <span className="section-subtitle">Career Path</span>
      <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>

      <div 
        className="slider-container" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: '100%', overflow: 'hidden', padding: '2rem 0' }}
      >
        <div 
          ref={scrollRef}
          style={{ 
            display: 'flex', gap: '2rem', overflowX: 'auto', scrollBehavior: 'auto',
            paddingBottom: '2rem', paddingLeft: '1rem', paddingRight: '1rem'
          }}
          className="hide-scrollbar"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={{ minWidth: '350px', maxWidth: '400px', flex: '0 0 auto', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
              whileHover={{ scale: 0.98 }}
            >
              <span className="timeline-date" style={{ alignSelf: 'flex-start', background: 'var(--accent-primary)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>{exp.date}</span>
              <h3 className="timeline-title" style={{ fontSize: '1.4rem', marginTop: '1.2rem', marginBottom: '0.3rem' }}>{exp.role}</h3>
              <h4 className="timeline-subtitle" style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-tertiary)' }}>{exp.company}</h4>
              <div className="timeline-description" style={{ flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', position: 'relative', paddingLeft: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)', fontWeight: 'bold' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {exp.certificateLink && (
                <a href={exp.certificateLink} target="_blank" rel="noreferrer" className="cert-btn" style={{ marginTop: '1.5rem', alignSelf: 'flex-start', border: '1px solid var(--accent-primary)', padding: '0.6rem 1rem', borderRadius: '8px', color: 'var(--text-primary)', display: 'flex', gap: '10px', alignItems: 'center', transition: 'all 0.3s' }}>
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
