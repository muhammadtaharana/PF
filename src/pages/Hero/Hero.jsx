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
      <h1 className="background-text">Muhammad  Taha</h1>

      <div className="hero-center-content">
        <h1>Hi! I'm Taha</h1>
        <p className="hero-subtitle">
          Cybersecurity Expert &nbsp;|&nbsp; Penetration Tester &nbsp;|&nbsp; CS Engineer
        </p>
        
        {/* Spotlight Interactive Image - Ab ye center mein hogi */}
        <div 
          className="image-container" 
          onMouseMove={handleMouseMove}
          style={{ "--x": `${mousePos.x}px`, "--y": `${mousePos.y}px` }}
        >
          <img src="/img1.png" className="base-image" alt="Profile" />
          <img src="/img2.png" className="hover-image" alt="Hovered" />
        </div>

        <div className="hero-btns">
          <a href="#contact" className="btn-main">Contact</a>
          <a href="#about" className="btn-sec">Who I'm</a>
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
        documentTitle="Muhammad Taha Rajpoot - CV"
      />
    </section>
  );
}