import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section className="hero">
      <h1 className="background-text">Muhammad  Taha</h1>

      <div className="hero-center-content">
        <h1>Hi! I'm Taha</h1>
        
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
      </div>
    </section>
  );
}