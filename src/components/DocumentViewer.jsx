import { useState, useEffect } from "react";
import "./DocumentViewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDownload, faExpand, faCompress, faFileAlt } from "@fortawesome/free-solid-svg-icons";

function DocumentViewer({ isOpen, onClose, documentUrl, documentTitle }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(documentUrl)}&embedded=true`;

  return (
    <div className="doc-viewer-overlay" onClick={onClose}>
      <div
        className={`doc-viewer-modal ${isFullscreen ? "fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="doc-viewer-header">
          <div className="doc-viewer-title">
            <FontAwesomeIcon icon={faFileAlt} className="doc-title-icon" />
            <span>{documentTitle || "Document Viewer"}</span>
          </div>
          <div className="doc-viewer-actions">
            <a
              href={documentUrl}
              download
              className="doc-action-btn"
              title="Download"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
            <button
              className="doc-action-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
            </button>
            <button className="doc-action-btn close-btn" onClick={onClose} title="Close">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="doc-viewer-body">
          {isLoading && (
            <div className="doc-loading">
              <div className="doc-loading-spinner"></div>
              <p>Loading document...</p>
            </div>
          )}
          <iframe
            src={googleViewerUrl}
            className="doc-iframe"
            title={documentTitle}
            onLoad={() => setIsLoading(false)}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

export default DocumentViewer;
