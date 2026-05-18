import { useState } from "react";
import "./Certifications.css";
import { FaCertificate, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { SiRedhat } from "react-icons/si";
import DocumentViewer from "../../components/DocumentViewer";

const certifications = [
  {
    id: "rhce",
    abbr: "RHCE",
    title: "Red Hat Certified Engineer",
    issuer: "Red Hat",
    color: "#cc0000",
    icon: "redhat",
    description:
      "Advanced certification demonstrating proficiency in Red Hat Enterprise Linux system administration, automation with Ansible, and enterprise infrastructure management.",
  },
  {
    id: "gcpde",
    abbr: "GCPDE",
    title: "Google Certified Professional DevOps Engineer",
    issuer: "Google",
    color: "#4285f4",
    icon: "cloud",
    description:
      "Professional certification for building and managing efficient DevOps practices, CI/CD pipelines, and cloud infrastructure on Google Cloud Platform.",
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
  },
];

function CertIcon({ type, color }) {
  if (type === "redhat") {
    return <SiRedhat style={{ color, fontSize: "32px" }} />;
  }
  return <FaCertificate style={{ color, fontSize: "32px" }} />;
}

export default function Certifications() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCert = (cert) => {
    setSelectedCert(cert);
    setViewerOpen(true);
  };

  return (
    <section className="certifications" id="certifications">
      <div className="title">
        <h2>Certifications</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-card-glow" style={{ "--glow-color": cert.color }}></div>

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
              className="cert-view-btn"
              style={{ "--btn-color": cert.color }}
              onClick={() => handleViewCert(cert)}
            >
              <FaEye />
              <span>View Certificate</span>
            </button>
          </div>
        ))}
      </div>

      {/* Document Viewer Modal */}
      <DocumentViewer
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        documentUrl={selectedCert ? `/certs/${selectedCert.id}_cert.pdf` : ""}
        documentTitle={selectedCert ? `${selectedCert.title} - ${selectedCert.issuer}` : ""}
      />
    </section>
  );
}
