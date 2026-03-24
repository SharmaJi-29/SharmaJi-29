import { motion } from 'framer-motion';
import './Timeline.css';

const educationData = [
  {
    degree: "B.Tech (Honours) – Computer Science & Technology",
    institution: "UTD-Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    date: "2022 – Present",
    description: [
      "Current Academic Performance: 8.5 CGPA",
      "Engaging in an intensive curriculum focused on Advanced Data Structures, Object-Oriented Programming, and Artificial Intelligence.",
      "Participating actively in high-stakes hackathons, open-source projects, and algorithmic computational research."
    ]
  },
  {
    degree: "Senior Secondary (XII) – CBSE Science",
    institution: "Jawahar Navodaya Vidyalaya (JNV), Bilaspur",
    date: "2021",
    description: [
      "Graduated with a final score of 82.6% in the rigorous Science stream.",
      "Developed a robust analytical and logical foundation leading directly into advanced computational sciences.",
      "Demonstrated consistent academic excellence in advanced mathematics and applied problem-solving."
    ]
  },
  {
    degree: "Secondary (X) – CBSE",
    institution: "Jawahar Navodaya Vidyalaya (JNV), Bilaspur",
    date: "2019",
    description: [
      "Graduated with a final score of 77.4% under the CBSE curriculum.",
      "Mastered core foundational prerequisites in quantitative mathematics, science, and reasoning."
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <span className="section-subtitle">Academic Background</span>
      <h2 className="section-title"><span className="gradient-text">Education</span></h2>

      <div className="timeline-container">
        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">{edu.date}</span>
                <h3 className="timeline-title">{edu.degree}</h3>
                <h4 className="timeline-subtitle">{edu.institution}</h4>
                <div className="timeline-description">
                  <ul>
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
