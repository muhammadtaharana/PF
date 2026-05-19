import "./Footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo"><span className="footer-dim">Muhammad</span>Taha</span>
          <p className="footer-copy">© 2026 Muhammad Taha Rajpoot. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a href="https://github.com/muhammadtaharana" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/muhammad-taha-Rajpoot" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>TeamCyberØps · Khanewal, Pakistan</span>
      </div>
    </footer>
  )
}

export default Footer;