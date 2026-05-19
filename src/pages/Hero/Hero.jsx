import { useState } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import DocumentViewer from "../../components/DocumentViewer";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cvViewerOpen, setCvViewerOpen] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section className="hero" id="hero">
      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      {/* Scrolling background text */}
      <div className="background-text-track track-top">
        <span>MUHAMMAD TAHA&nbsp;&nbsp;·&nbsp;&nbsp;CYBERSECURITY&nbsp;&nbsp;·&nbsp;&nbsp;MUHAMMAD TAHA&nbsp;&nbsp;·&nbsp;&nbsp;PENETRATION TESTER&nbsp;&nbsp;·&nbsp;&nbsp;MUHAMMAD TAHA&nbsp;&nbsp;·&nbsp;&nbsp;CYBERSECURITY&nbsp;&nbsp;·&nbsp;&nbsp;MUHAMMAD TAHA&nbsp;&nbsp;·&nbsp;&nbsp;PENETRATION TESTER&nbsp;&nbsp;·&nbsp;&nbsp;</span>
      </div>
      <div className="background-text-track track-bottom reverse">
        <span>RED HAT CERTIFIED&nbsp;&nbsp;·&nbsp;&nbsp;TAHA RAJPOOT&nbsp;&nbsp;·&nbsp;&nbsp;CS ENGINEER&nbsp;&nbsp;·&nbsp;&nbsp;TEAMCYBERØPS&nbsp;&nbsp;·&nbsp;&nbsp;RED HAT CERTIFIED&nbsp;&nbsp;·&nbsp;&nbsp;TAHA RAJPOOT&nbsp;&nbsp;·&nbsp;&nbsp;CS ENGINEER&nbsp;&nbsp;·&nbsp;&nbsp;TEAMCYBERØPS&nbsp;&nbsp;·&nbsp;&nbsp;</span>
      </div>

      {/* Film grain overlay */}
      <div className="hero-grain"></div>

      <div className="hero-center-content">
        <div className="hero-tag">CYBERSECURITY ENGINEER</div>
        <h1>Hi! I'm <span className="hero-name-accent">Taha</span></h1>
        <p className="hero-subtitle">
          Penetration Tester &nbsp;·&nbsp; Red Hat Certified &nbsp;·&nbsp; CS Engineer
        </p>
        
        {/* Spotlight Interactive Image */}
        <div 
          className="image-container" 
          onMouseMove={handleMouseMove}
          style={{ "--x": `${mousePos.x}px`, "--y": `${mousePos.y}px` }}
        >
          <img src="/img1.png" className="base-image" alt="Muhammad Taha Rajpoot" />
          <img src="/img2.png" className="hover-image" alt="Spotlight reveal" />
        </div>

        <div className="hero-btns">
          <a href="#contact" className="btn-main">Contact Me</a>
          <a href="#about" className="btn-sec">Who I Am</a>
        </div>

        {/* CV Action Buttons */}
        <div className="cv-btns">
          <a href="/taha_cv_v2.docx" download className="cv-btn cv-download">
            <FontAwesomeIcon icon={faFileDownload} />
            <span>Download CV</span>
          </a>
          <button className="cv-btn cv-view" onClick={() => setCvViewerOpen(true)}>
            <FontAwesomeIcon icon={faEye} />
            <span>View CV</span>
          </button>
        </div>
      </div>

      {/* CV Document Viewer Modal */}
      <DocumentViewer
        isOpen={cvViewerOpen}
        onClose={() => setCvViewerOpen(false)}
        documentUrl="/taha_cv_v2.docx"
        documentTitle="Muhammad Taha Rajpoot — CV"
      />
    </section>
  );
}