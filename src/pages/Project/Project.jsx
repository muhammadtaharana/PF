import "./Project.css";

import img1 from "../../assets/images/NetworkSniffer.jpg";
import img2 from "../../assets/images/SafeVault.jpg";
import img3 from "../../assets/images/PortScanner.jpg";
import img4 from "../../assets/images/HostHeaderInjector.jpg";
import img5 from "../../assets/images/CORS.jpg";
import img6 from "../../assets/images/CSRF.jpg";
import img7 from "../../assets/images/OriginIPMapper.jpg";
import img8 from "../../assets/images/SubToIPFinder.jpg";

const projects = [
  {
    title: "Network Sniffer",
    img: img1,
    desc: "Advanced packet capturing and analysis tool for network traffic inspection and protocol analysis.",
    skills: ["Python", "Scapy", "Wireshark"]
  },

  {
    title: "Safe Vault",
    img: img2,
    desc: "Secure password manager with encryption, authentication, and secure credential storage.",
    skills: ["Python", "Encryption", "Database"]
  },

  {
    title: "Port Scanner",
    img: img3,
    desc: "Multi-threaded port scanning tool for network reconnaissance and vulnerability assessment.",
    skills: ["Python", "Bash", "Networking"]
  },

  {
    title: "Host Header Injector",
    img: img4,
    desc: "Penetration testing tool for detecting host header injection vulnerabilities in web applications.",
    skills: ["Python", "Burp Suite", "HTTP"]
  },

  {
    title: "CORS Vulnerability Scanner",
    img: img5,
    desc: "Automated scanner for detecting Cross-Origin Resource Sharing misconfigurations and exploits.",
    skills: ["JavaScript", "Python", "Web Security"]
  },

  {
    title: "CSRF Vulnerability Scanner",
    img: img6,
    desc: "Comprehensive tool for identifying Cross-Site Request Forgery vulnerabilities in web applications.",
    skills: ["Python", "Bash", "OWASP"]
  },

  {
    title: "Origin IP Mapper",
    img: img7,
    desc: "Geolocation and IP reconnaissance tool for mapping target origins and network infrastructure.",
    skills: ["Python", "Bash", "Networking"]
  },

  {
    title: "Sub to IP Finder",
    img: img8,
    desc: "Subdomain enumeration and DNS resolution tool for discovering IP addresses and network mapping.",
    skills: ["Python", "DNS", "Reconnaissance"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}