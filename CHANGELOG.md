# Changelog

All notable changes to Muhammad Taha's Portfolio are documented in this file.

---

## [2.0.0] - 2026-05-18

### ✨ New Features

#### CV Integration
- **Download CV Button** — Added a glassmorphic "Download CV" button in the Hero section that allows visitors to download the full CV (.docx) directly.
- **View CV Button** — Added a "View CV" button that opens the CV in an elegant in-page document viewer modal.
- **Document Viewer Component** — Built a reusable `DocumentViewer` modal component with:
  - Google Docs Viewer integration for rendering .docx files inline
  - Fullscreen toggle support
  - Download shortcut in the viewer header
  - Keyboard support (Escape to close)
  - Loading spinner with smooth animations
  - Responsive design for all screen sizes

#### Certifications Section
- **5 Professional Certifications** — Added a dedicated Certifications section showcasing:
  - **C|EH** — Certified Ethical Hacker (EC-Council)
  - **RHCE** — Red Hat Certified Engineer (Red Hat)
  - **GCPDE** — Google Certified Professional DevOps Engineer (Google)
  - **ISCS** — Information Systems & Cyber Security (NAVTII)
  - **PT** — Penetration Tester Certification (NAVTII)
- **Certificate Viewer** — Each certification card has a "View Certificate" button that opens the corresponding certificate document in the Document Viewer modal.
- **Glassmorphic Card Design** — Cards feature:
  - Color-coded glow effects per certification
  - Icon-wrapped headers with abbreviation badges
  - Issuer badges with external link indicators
  - Smooth hover lift animations with shadow depth
  - Semi-transparent backgrounds with backdrop blur

#### Hero Section Enhancements
- **Professional Subtitle** — Added "Cybersecurity Expert | Penetration Tester | CS Engineer" subtitle below the name.
- **CV Action Buttons** — Dual-button row for Download CV and View CV with glassmorphic styling.

### 🔧 Improvements

#### Navigation Updates
- **Certifications Link** — Added "Certifications" to the header navigation bar.
- **Mobile Hamburger Menu** — Implemented a responsive hamburger toggle for the navigation on screens below 900px.
- **Updated LinkedIn URL** — Fixed LinkedIn link to match the correct profile URL from CV (`muhammad-taha-Rajpoot`).

#### Component Architecture
- **DocumentViewer** — New reusable component (`src/components/DocumentViewer.jsx`) with its own CSS module.
- **Certifications Page** — New page module (`src/pages/Certifications/`) with JSX and CSS.

### 📁 Files Added
- `src/components/DocumentViewer.jsx` — Reusable document viewer modal
- `src/components/DocumentViewer.css` — Document viewer styles
- `src/pages/Certifications/Certifications.jsx` — Certifications section component
- `src/pages/Certifications/Certifications.css` — Certifications section styles
- `public/taha_cv_v2.docx` — CV document for download/viewing
- `CHANGELOG.md` — This changelog file

### 📝 Files Modified
- `src/App.jsx` — Added Certifications import and section
- `src/components/Header.jsx` — Added Certifications nav link, mobile menu, updated LinkedIn URL
- `src/components/Header.css` — Added responsive mobile menu styles
- `src/pages/Hero/Hero.jsx` — Added CV buttons, subtitle, DocumentViewer integration
- `src/pages/Hero/Hero.css` — Added CV button styles, subtitle styles, responsive adjustments

---

## [1.0.0] - 2026-05-10

### 🎉 Initial Release
- **Hero Section** — Interactive spotlight image with mouse-follow reveal effect
- **About Section** — Flip card photo gallery with bio text
- **Skills Slider** — Auto-scrolling icon carousel for tech stack
- **Projects Section** — 8 cybersecurity project cards with descriptions
- **Services Section** — Vulnerability Assessment, Penetration Testing, Ethical Hacking cards
- **Contact Section** — Contact form with email, phone, and location info
- **Footer** — Social links with hover animations
- **Glassmorphic Header** — Fixed navbar with scroll effect and backdrop blur
