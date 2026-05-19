import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">
      <div className="section-title">
        <span className="section-tag">ABOUT ME</span>
        <h2>Who I Am</h2>
        <div className="title-line"></div>
      </div>

      <div className="content">
        <div className="photo-card" onClick={() => setFlip(!flip)}>
          <div className={flip ? "photo-inner flip" : "photo-inner"}>
            <div className="photo-front">
              <img src="img3.png" alt="Muhammad Taha Rajpoot" />
            </div>
            <div className="photo-back">
              <img src="img4.png" alt="Muhammad Taha - Cybersecurity" />
            </div>
          </div>
          <span className="photo-hint">Click to flip</span>
        </div>

        <div className="text-about">
          <div className="about-highlight">
            <span className="highlight-badge">TeamCyberØps Member</span>
            <span className="highlight-badge">BSCS — 4th Semester</span>
          </div>
          <p>
            Cybersecurity-focused Computer Science Engineer with hands-on expertise in penetration testing, 
            offensive security tooling, and network reconnaissance. Red Hat Certified Engineer (RHCE), 
            Certified Ethical Hacker (C|EH), and Google Certified Professional DevOps Engineer (GCPDE).
          </p>
          <p>
            As an active member of TeamCyberØps, I collaborate with security researchers on recon automation, 
            bug bounty hunting, and open-source security tooling. My expertise spans vulnerability assessment, 
            web application security, and building practical tools that empower penetration testers and 
            red teamers worldwide.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">5</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">8+</span>
              <span className="stat-label">Security Tools</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
}

export default About;