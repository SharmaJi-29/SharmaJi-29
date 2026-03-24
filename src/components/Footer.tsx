
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-title gradient-text">Mrityunjay Sharma</h2>
            <p className="footer-desc">
              Building intelligent solutions and extracting actionable insights from complex data structures. Open to collaborations and interesting challenges.
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/SharmaJi-29" target="_blank" rel="noreferrer" className="social-link tooltip-wrap">
              <Github size={24} />
              <span className="tooltip">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mrityunjay-sharma-36a401266/" target="_blank" rel="noreferrer" className="social-link tooltip-wrap">
              <Linkedin size={24} />
              <span className="tooltip">LinkedIn</span>
            </a>
            <a href="mailto:sharmamrityunjay78@gmail.com" className="social-link tooltip-wrap">
              <Mail size={24} />
              <span className="tooltip">Email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mrityunjay Sharma. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
