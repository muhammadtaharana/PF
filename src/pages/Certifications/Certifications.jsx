import { useState } from "react";
import "./Certifications.css";
import { FaEye, FaExternalLinkAlt, FaShieldAlt, FaCrosshairs } from "react-icons/fa";
import { SiRedhat, SiGooglecloud, SiAndroid } from "react-icons/si";
import { FaUserShield } from "react-icons/fa6";
import DocumentViewer from "../../components/DocumentViewer";

const certifications = [
  {
    id: "ceh",
    abbr: "C|EH",
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    color: "#e74c3c",
    icon: "eccouncil",
    description:
      "Industry-recognized certification validating proficiency in ethical hacking, penetration testing methodologies, and security assessment techniques.",
    certFile: null
  },
  {
    id: "rhce",
    abbr: "RHCE",
    title: "Red Hat Certified Engineer",
    issuer: "Red Hat",
    color: "#cc0000",
    icon: "redhat",
    description:
      "Advanced certification demonstrating proficiency in Red Hat Enterprise Linux system administration, automation with Ansible, and enterprise infrastructure management.",
    certFile: "/certs/RHCE.pdf"
  },
  {
    id: "gcpde",
    abbr: "GCPDE",
    title: "Google Certified Professional DevOps Engineer",
    issuer: "Google",
    color: "#4285f4",
    icon: "google",
    description:
      "Professional certification for building and managing efficient DevOps practices, CI/CD pipelines, and cloud infrastructure on Google Cloud Platform.",
    certFile: "/certs/GPCDE.pdf"
  },
  {
    id: "iscs",
    abbr: "ISCS",
    title: "Information Systems & Cyber Security",
    issuer: "NAVTII",
    color: "#2ecc71",
    icon: "shield",
    description:
      "Comprehensive certification covering information systems security, cyber defense strategies, and security governance frameworks.",
    certFile: null
  },
  {
    id: "pt",
    abbr: "PT",
    title: "Penetration Tester Certification",
    issuer: "NAVTII",
    color: "#9b59b6",
    icon: "crosshair",
    description:
      "Professional certification validating practical skills in penetration testing methodologies, vulnerability assessment, and security audit reporting.",
    certFile: "/certs/PentestCE+.pdf"
  },
  {
    id: "abh",
    abbr: "ABH",
    title: "Android Bug Hunting",
    issuer: "Course Certification",
    color: "#3ddc84",
    icon: "android",
    description:
      "Specialized training in Android application security, mobile penetration testing, reverse engineering APKs, and identifying vulnerabilities in Android ecosystems.",
    certFile: "/certs/AndriodBugHunting.png"
  },
];

function CertIcon({ type, color }) {
  const style = { color, fontSize: "28px" };
  switch (type) {
    case "eccouncil":  return <FaUserShield style={style} />;
    case "redhat":     return <SiRedhat style={style} />;
    case "google":     return <SiGooglecloud style={style} />;
    case "shield":     return <FaShieldAlt style={style} />;
    case "crosshair":  return <FaCrosshairs style={style} />;
    case "android":    return <SiAndroid style={style} />;
    default:           return <FaShieldAlt style={style} />;
  }
}

export default function Certifications() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCert = (cert) => {
    if (cert.certFile) {
      setSelectedCert(cert);
      setViewerOpen(true);
    }
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-title">
        <span className="section-tag">CREDENTIALS</span>
        <h2>Certifications</h2>
        <div className="title-line"></div>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-card-accent" style={{ "--accent-color": cert.color }}></div>

            <div className="cert-header">
              <div className="cert-icon-wrap" style={{ "--accent": cert.color }}>
                <CertIcon type={cert.icon} color={cert.color} />
              </div>
              <div className="cert-abbr" style={{ color: cert.color }}>
                {cert.abbr}
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">
              <FaExternalLinkAlt className="issuer-icon" />
              {cert.issuer}
            </p>
            <p className="cert-desc">{cert.description}</p>

            <button
              className={`cert-view-btn ${!cert.certFile ? "cert-btn-disabled" : ""}`}
              style={{ "--btn-color": cert.color }}
              onClick={() => handleViewCert(cert)}
              disabled={!cert.certFile}
            >
              <FaEye />
              <span>{cert.certFile ? "View Certificate" : "Coming Soon"}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Document Viewer Modal */}
      <DocumentViewer
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        documentUrl={selectedCert ? selectedCert.certFile : ""}
        documentTitle={selectedCert ? `${selectedCert.title} — ${selectedCert.issuer}` : ""}
      />
    </section>
  );
}
