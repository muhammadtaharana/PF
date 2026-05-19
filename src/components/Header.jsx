import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={scrolled ? "header scroll" : "header"}>
      <div className="logo">
        <h1><span>Muhammad</span>Taha</h1>
      </div>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`links ${menuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#project" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
        <li><a href="#serv" onClick={handleNavClick}>Services</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>

      <ul className="icons">
        <li><a href="https://github.com/muhammadtaharana" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://linkedin.com/in/muhammad-taha-Rajpoot" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
    </header>
  )
}

export default Header