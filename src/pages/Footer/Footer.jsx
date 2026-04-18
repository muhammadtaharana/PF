import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Muhammad Taha</p>

        <div className="social-icons">

          <a href="https://github.com/muhammadtaharana"><FaGithub/></a>
          <a href="https://linkedin.com/in/muhammadtaharana"><FaLinkedin/></a>
          <a href="https://instagram.com/muhammadtaharana"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;