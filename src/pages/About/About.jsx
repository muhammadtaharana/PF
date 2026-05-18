import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="photo-card" onClick={() => setFlip(!flip)}>
          <div className={flip ? "photo-inner flip" : "photo-inner"}>
            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>
            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-about">
          <p>
            Hi, I'm Muhammad Taha, a passionate Computer Science student specializing in cybersecurity and DevOps engineering. As a Certified Red Hat Engineer (RHCE) and Certified Penetration Tester, I bring a security-first mindset to every project I undertake. With a strong foundation in ethical hacking and defensive security practices, I'm committed to identifying vulnerabilities and implementing robust solutions.
          </p>
          <p>
            As an active member of TeamCyberOps in Pakistan, I collaborate with like-minded security professionals to advance cybersecurity initiatives and share knowledge within the community. My expertise spans full-stack architecture, infrastructure security, and penetration testing methodologies. I design scalable, resilient solutions that prioritize performance while maintaining the highest security standards throughout the development lifecycle.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;