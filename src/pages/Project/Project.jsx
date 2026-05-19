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
    title: "sub2ip",
    img: img8,
    desc: "Robust Bash-based resolution engine that converts subdomains into IPv4 addresses — essential for large-scope recon pipelines.",
    skills: ["Shell", "Bash", "DNS"],
    github: "https://github.com/muhammadtaharana/sub2ip",
    stars: "★1"
  },
  {
    title: "ip2sub (Origin Mapper)",
    img: img7,
    desc: "High-stealth reconnaissance tool to unmask real backend servers behind Cloud WAFs and CDNs by correlating IPs with SSL certificates.",
    skills: ["Shell", "SSL", "CDN Bypass"],
    github: "https://github.com/muhammadtaharana/ip2sub",
    stars: "★1"
  },
  {
    title: "Host Header Injector",
    img: img4,
    desc: "HTTP Header Inspector — detects malicious header reflections and header-injection vulnerabilities in web applications.",
    skills: ["Shell", "HTTP", "Burp Suite"],
    github: "https://github.com/muhammadtaharana/hhi",
    stars: "★1"
  },
  {
    title: "Link Categorizer",
    img: img5,
    desc: "Professional-grade URL categorization tool for security assessment and bug bounty hunting. Auto-sorts links by type and risk.",
    skills: ["Shell", "OSINT", "Recon"],
    github: "https://github.com/muhammadtaharana/link_categorizer",
    stars: "★1"
  },
  {
    title: "TeamCyberOps Suite",
    img: img1,
    desc: "All-in-one automated offensive security suite v5.0.5+. Orchestrates recon, exploitation, and OSINT pipelines automatically.",
    skills: ["Python", "Automation", "OSINT"],
    github: "https://github.com/mohidqx/TeamCyberOps-Suite"
  },
  {
    title: "AutoInjectX",
    img: img6,
    desc: "Multi-threaded XSS fuzzer with automated payload injection, reflected/stored/DOM XSS detection, and false-positive reduction.",
    skills: ["Python", "XSS", "Fuzzing"],
    github: "https://github.com/mohidqx/AutoInjectX",
    stars: "★1"
  },
  {
    title: "NucleiFuzzer",
    img: img3,
    desc: "Advanced web vulnerability scanner and automation framework built around the Nuclei engine for multi-template scanning.",
    skills: ["Shell", "Nuclei", "Scanner"],
    github: "https://github.com/mohidqx/NucleiFuzzer"
  },
  {
    title: "Network Sniffer & Scanner",
    img: img2,
    desc: "Multi-threaded port scanning and packet capturing tool for network reconnaissance and vulnerability assessment.",
    skills: ["Python", "Scapy", "Networking"],
    github: "https://github.com/muhammadtaharana"
  }
];

export default function Project() {
  return (
    <section className="project-section" id="project">
      <div className="section-title">
        <span className="section-tag">MY WORK</span>
        <h2>Security Arsenal</h2>
        <div className="title-line"></div>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrap">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="project-card-body">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                {project.stars && <span className="project-stars">{project.stars}</span>}
              </div>

              <p>{project.desc}</p>

              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>

              <div className="project-btns">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}