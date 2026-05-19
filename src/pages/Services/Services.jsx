import "./Services.css"
import { FaShieldAlt, FaBug, FaUserSecret, FaServer, FaCode } from "react-icons/fa";

function Services() {
  return (
    <div className="services-section" id="serv">
      <div className="section-title">
        <span className="section-tag">WHAT I DO</span>
        <h2>Services</h2>
        <div className="title-line"></div>
      </div>

      <div className="services-container">

        <div className="service-card">
          <div className="service-icon-wrap">
            <FaShieldAlt className="service-icon" />
          </div>
          <h3>Vulnerability Assessment</h3>
          <p>Thorough analysis to identify and prioritize security weaknesses across applications, networks, and infrastructure using industry-standard methodologies.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-wrap">
            <FaBug className="service-icon" />
          </div>
          <h3>Penetration Testing</h3>
          <p>Simulating real-world cyber attacks to evaluate security posture, exploit vulnerabilities, and provide actionable remediation strategies.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-wrap">
            <FaUserSecret className="service-icon" />
          </div>
          <h3>Bug Bounty Hunting</h3>
          <p>Identifying critical security flaws in web applications through systematic reconnaissance, fuzzing, and manual testing techniques.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-wrap">
            <FaServer className="service-icon" />
          </div>
          <h3>Network Reconnaissance</h3>
          <p>Advanced network scanning, subdomain enumeration, and OSINT gathering to map attack surfaces and discover hidden assets.</p>
        </div>

        <div className="service-card">
          <div className="service-icon-wrap">
            <FaCode className="service-icon" />
          </div>
          <h3>Security Tool Development</h3>
          <p>Building custom offensive security tools, automation scripts, and recon frameworks tailored to specific security assessment needs.</p>
        </div>

      </div>
    </div>
  )
}

export default Services;