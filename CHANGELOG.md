# Changelog

All notable changes to Muhammad Taha's Portfolio are documented in this file.

---

## [3.0.0] - 2026-05-19

### 🎨 Major Theme Overhaul

- **Unified Dark Theme** — Complete redesign of all sections to use a cohesive dark glassmorphic design system:
  - Pure dark background (`#0a0a0a`) across all sections
  - Glassmorphic card design with subtle borders (`rgba(255,255,255,0.05)`)
  - Consistent hover animations using `cubic-bezier(0.16, 1, 0.3, 1)` easing
  - Unified color palette: `#e0e0e0` (text), `#777-#999` (secondary), `#555` (muted)
- **Inter Font** — Replaced default browser fonts with Google's Inter typeface across all components
- **Section Title System** — Standardized section headers with tag label, title, and gradient underline

### ✨ New Features

#### CV Integration (Enhanced)
- **Download CV Button** — Glassmorphic "Download CV" button in Hero section
- **View CV Button** — Opens CV in the Document Viewer modal
- **Smart Document Viewer** — Auto-detects file type:
  - PDFs render natively in browser (no Google dependency)
  - `.docx` files render via Google Docs Viewer as fallback
  - Fullscreen toggle, download shortcut, ESC-to-close
  - Loading spinner with smooth scale animation

#### Certifications Section (Expanded)
- **5 Professional Certifications** from CV:
  - **C|EH** — Certified Ethical Hacker (EC-Council) `#e74c3c`
  - **RHCE** — Red Hat Certified Engineer (Red Hat) `#cc0000`
  - **GCPDE** — Google Certified Professional DevOps Engineer (Google) `#4285f4`
  - **ISCS** — Information Systems & Cyber Security (NAVTII) `#2ecc71`
  - **PT** — Penetration Tester Certification (NAVTII) `#9b59b6`
- **Certificate Viewer** — "View Certificate" button opens actual PDF files:
  - `RHCE.pdf` and `GPCDE.pdf` available, others show "Coming Soon"
  - Correct file path mapping to `/certs/` directory
- **Color-coded accent bars** — Each card has a certification-specific accent color
- **Disabled state** — Certs without uploaded files show disabled "Coming Soon" button

#### Hero Section (Enhanced)
- **"CYBERSECURITY ENGINEER" tag badge** — Pill-shaped tag above name
- **Gradient name accent** — "Taha" rendered with metallic gradient
- **Updated subtitle** — "Penetration Tester · Red Hat Certified · CS Engineer"

#### About Section (Rewritten)
- **CV-accurate bio** — Pulled directly from CV content
- **Highlight badges** — "TeamCyberØps Member" and "BSCS — 4th Semester" pills
- **Stats row** — 5 Certifications · 8+ Security Tools · 3+ Years Experience
- **Flip photo card** — Click-to-flip with grayscale-to-color hover effect

#### Skills Slider (Updated)
- **Cybersecurity-focused icons**: Kali Linux, Burp Suite, Wireshark, OWASP, Red Hat, Python, Bash, Docker, Google Cloud
- **Edge fade mask** — Smooth gradient fade at slider edges
- **Duplicated track** — Seamless infinite scroll without gaps
- **Glow hover effect** — Drop shadow on icon hover

#### Projects Section (Rewritten from CV)
- **8 projects from GitHub** matching CV's Security Arsenal:
  - sub2ip, ip2sub (Origin Mapper), Host Header Injector (hhi), Link Categorizer
  - TeamCyberOps Suite, AutoInjectX, NucleiFuzzer, Network Sniffer
- **Real GitHub links** — Correct URLs to muhammadtaharana and mohidqx repositories
- **Star counts** — Shows GitHub stars where available
- **Grayscale-to-color image effect** — Cards reveal color on hover

#### Services Section (Expanded)
- **5 services** (up from 3):
  - Vulnerability Assessment, Penetration Testing, Bug Bounty Hunting,
    Network Reconnaissance, Security Tool Development
- **Icon wraps** — Each service has a glassmorphic icon container

#### Contact Section (Updated from CV)
- **CV-accurate details**: rajputmomin820@gmail.com, +92 329 4935185, Khanewal, Pakistan
- **Social buttons** — GitHub and LinkedIn with glassmorphic button style
- **Security-focused copy** — "Need a penetration test or security consultation"

#### Footer (Enhanced)
- **Logo with dim prefix** — "Muhammad" in dim, "Taha" in bright
- **TeamCyberØps badge** — Bottom bar with team name and location
- **Glassmorphic social buttons** — Square rounded buttons with hover lift

### 🔧 Technical Improvements

- **SEO Overhaul** — Proper meta tags, OG tags, and description in `index.html`
- **Responsive hamburger menu** — Slides in from right on screens < 900px
- **Nav link underline animation** — Links reveal underline on hover
- **Consistent class naming** — Sections use unique class names to prevent CSS conflicts
- **Custom scrollbar** — Dark themed scrollbar matching the design system

### 📁 Files Added
- `public/taha_cv_v2.docx` — CV document for download/viewing

### 📝 Files Modified (All)
- `index.html` — SEO meta tags, Inter font, OG metadata
- `src/components/Header.jsx` — Hamburger menu, Certifications nav, updated links
- `src/components/Header.css` — Full dark theme rewrite, responsive menu
- `src/components/DocumentViewer.jsx` — Smart PDF/docx detection
- `src/pages/Hero/Hero.jsx` — Tag badge, gradient accent, CV buttons
- `src/pages/Hero/Hero.css` — Dark theme, refined buttons
- `src/pages/About/About.jsx` — CV bio, badges, stats
- `src/pages/About/About.css` — Dark theme with glassmorphic elements
- `src/pages/About/Skills.jsx` — Cybersecurity-focused icons
- `src/pages/About/Skills.css` — Edge fade, glow hover
- `src/pages/Project/Project.jsx` — CV projects with GitHub links
- `src/pages/Project/Project.css` — Dark glassmorphic cards
- `src/pages/Certifications/Certifications.jsx` — All 5 certs, correct file paths
- `src/pages/Certifications/Certifications.css` — Dark theme, accent bars
- `src/pages/Services/Services.jsx` — 5 services with new icons
- `src/pages/Services/Services.css` — Dark glassmorphic cards
- `src/pages/Contact/Contact.jsx` — CV contact info, social buttons
- `src/pages/Contact/Contact.css` — Dark theme form, social buttons
- `src/pages/Footer/Footer.jsx` — Logo, team badge, social buttons
- `src/pages/Footer/Footer.css` — Dark theme, bottom bar
- `CHANGELOG.md` — This update

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
- **3 Professional Certifications** — Initial certifications section with RHCE, GCPDE, PT
- **Certificate Viewer** — Each certification card has a "View Certificate" button
- **Glassmorphic Card Design** — Cards with color-coded glow effects

#### Hero Section Enhancements
- **Professional Subtitle** — Added "Cybersecurity Expert | Penetration Tester | CS Engineer"
- **CV Action Buttons** — Dual-button row for Download CV and View CV

### 🔧 Improvements
- **Certifications Link** — Added "Certifications" to the header navigation
- **Mobile Hamburger Menu** — Implemented responsive hamburger toggle

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
