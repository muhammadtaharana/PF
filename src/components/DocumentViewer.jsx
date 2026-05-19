import { useState, useEffect, useCallback } from "react";
import "./DocumentViewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDownload, faExpand, faCompress, faFileAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function DocumentViewer({ isOpen, onClose, documentUrl, documentTitle }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isPdf = documentUrl?.toLowerCase().endsWith(".pdf");
  const isDocx = documentUrl?.toLowerCase().endsWith(".docx") || documentUrl?.toLowerCase().endsWith(".doc");
  const isImage = /\.(png|jpg|jpeg|webp|gif)$/i.test(documentUrl || "");

  // Build the viewer URL
  const getViewerUrl = useCallback(() => {
    if (!documentUrl) return "";
    if (isPdf) {
      // For PDFs — use the direct URL (browsers render PDFs natively in iframes)
      return documentUrl;
    }
    if (isDocx) {
      // For DOCX — use Google Docs Viewer
      const fullUrl = `${window.location.origin}${documentUrl}`;
      return `https://docs.google.com/gview?url=${encodeURIComponent(fullUrl)}&embedded=true`;
    }
    return documentUrl;
  }, [documentUrl, isPdf, isDocx]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);

      // Safety timeout: hide loading after 3s even if onLoad doesn't fire (common with PDFs)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, documentUrl]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const viewerUrl = getViewerUrl();

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
            {/* Open in new tab */}
            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-action-btn"
              title="Open in new tab"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            {/* Download */}
            <a
              href={documentUrl}
              download
              className="doc-action-btn"
              title="Download"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
            {/* Fullscreen */}
            <button
              className="doc-action-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
            </button>
            {/* Close */}
            <button className="doc-action-btn close-btn" onClick={onClose} title="Close (Esc)">
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

          {isImage ? (
            /* Images: render directly */
            <div className="doc-image-wrap">
              <img
                src={documentUrl}
                alt={documentTitle}
                className="doc-image"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          ) : isPdf ? (
            /* PDF: use <embed> for reliable native rendering */
            <embed
              src={viewerUrl}
              type="application/pdf"
              className="doc-embed"
              title={documentTitle}
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            /* DOCX / others: use iframe with Google Viewer */
            <iframe
              src={viewerUrl}
              className="doc-iframe"
              title={documentTitle}
              onLoad={() => setIsLoading(false)}
              frameBorder="0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DocumentViewer;
