# Anjali Hiremath | Developer Portfolio

A modern, high-performance, responsive developer portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

Designed with a **dark navy / electric blue / purple** aesthetic alongside a clean **light theme**, persisted across sessions via `localStorage`.

---

## 🚀 Live Demo & Repository

- **GitHub Repository**: [https://github.com/AnjaliH-er](https://github.com/AnjaliH-er)
- **LinkedIn Profile**: [https://www.linkedin.com/in/anjali-hiremath-1b9100301/](https://www.linkedin.com/in/anjali-hiremath-1b9100301/)
- **Contact Email**: [hiremathanjali13@gmail.com](mailto:hiremathanjali13@gmail.com)

---

## 🛠️ Tech Stack

- **Frontend Library**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 (with custom Dark/Light color system)
- **Iconography**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Architecture**: Modular Component-Driven Architecture with Centralized Data Management

---

## 📁 Project Structure

```text
updated portfolio/
├── index.html                  # SEO meta tags, OpenGraph preview, Favicon
├── package.json                # Project dependencies and run scripts
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # Theme colors (navy, electric blue, purple) & typography
├── postcss.config.js           # PostCSS Tailwind plugins
├── public/
│   ├── favicon.svg             # Modern AH monogram favicon
│   ├── resume.pdf              # Developer resume file (download target)
│   └── images/
│       ├── profile-placeholder.svg # Default tech portrait avatar
│       ├── profile.jpg         # (Drop your photo here to automatically replace the placeholder)
│       ├── certifications/     # Verified certificate images
│       │   ├── AMCAT certificate.jpeg
│       │   ├── cyber security consulting simulation.jpeg
│       │   ├── cybersecurity fundamentals.jpeg
│       │   ├── cybersecurity job simulation.jpeg
│       │   ├── deloitte cyber job simulation.jpeg
│       │   ├── full stack java.jpeg
│       │   └── learning java 17.jpeg
│       └── projects/           # Vector interface mockups for all 5 featured projects
│           ├── student-portal.svg
│           ├── cybershield-ai.svg
│           ├── blinkit-dashboard.svg
│           ├── library-system.svg
│           └── smart-parking.svg
└── src/
    ├── main.jsx                # Application root entry point
    ├── App.jsx                 # App shell, Navbar, 8 Section components, Footer
    ├── index.css               # Global theme variables, glassmorphism, scrollbars
    ├── context/
    │   └── ThemeContext.jsx    # Dark/Light theme manager (syncs to localStorage)
    ├── data/                   # ALL DATA IS EASILY EDITABLE HERE
    │   ├── personal.js         # Name, titles, contact info, bio paragraphs
    │   ├── skills.js           # Categorized technical competencies
    │   ├── experience.js       # Skyrovix & Addvic Technology internships
    │   ├── projects.js         # 5 featured projects (features, tech stacks, links)
    │   ├── education.js        # B.Tech in CSE at SSWCOE / DBATU
    │   ├── certifications.js   # 7 verified certifications registry
    │   └── socialLinks.js      # Verified external URLs
    ├── components/
    │   ├── Navbar.jsx          # Sticky responsive header with active section spy
    │   ├── Footer.jsx          # Dynamic copyright, social links, quick jumps
    │   ├── CertificateCard.jsx # Certificate preview card with category badges
    │   ├── CertificateModal.jsx# Accessible lightbox modal with full-size viewer
    │   ├── ProjectCard.jsx     # Project card with tags, preview, and modal trigger
    │   ├── ProjectModal.jsx    # Accessible modal for detailed project breakdown
    │   ├── ThemeToggle.jsx     # Sun/Moon theme switcher button
    │   ├── SectionHeading.jsx  # Consistent section title & badge styling
    │   ├── ProjectCard.jsx     # Project card with tags, preview, and modal trigger
    │   ├── ProjectModal.jsx    # Accessible modal for detailed project breakdown
    │   ├── TechBadge.jsx       # Reusable skill chip component
    │   ├── ScrollProgress.jsx  # Subtle top viewport reading progress bar
    │   └── BackToTop.jsx       # Floating scroll-to-top button
    └── sections/
        ├── Hero.jsx            # Typing animation, CTAs, portrait component
        ├── About.jsx           # Bio statement + 3 interest cards
        ├── Skills.jsx          # 7 categorized skill sets with honest focus points
        ├── Experience.jsx      # Vertical timeline for internships
        ├── Projects.jsx        # Category filters (All, Full Stack, Data, AI & Cyber)
        ├── Education.jsx       # Academic degree and college information
        ├── Certifications.jsx  # Dedicated credentials showcase
        └── Contact.jsx         # Copy-email toast, direct links, and mail composer
```

---

## 💻 Quick Start & Development

### Prerequisites
- Node.js (version 18 or newer)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL displayed in the console).

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created inside the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 🎨 How to Customize Content

All personal content is separated into the `src/data/` folder so you don't need to touch JSX layout code.

### 1. How to Add Your Profile Photograph
1. Save your photo as **`profile.jpg`**.
2. Place it into the **`public/images/`** folder:
   ```text
   public/images/profile.jpg
   ```
3. The website is pre-configured to automatically display `public/images/profile.jpg`. If it is absent, it gracefully falls back to `public/images/profile-placeholder.svg`. No code changes required!

### 2. How to Add Your Resume PDF
1. Save your finalized resume as **`resume.pdf`**.
2. Place or overwrite the file at:
   ```text
   public/resume.pdf
   ```
3. The "Download Resume" buttons in the navigation bar and hero section will immediately download this file when clicked.

### 3. How to Update Project GitHub Links & Demos
Open `src/data/projects.js` and locate the project entry:
```javascript
{
  id: "student-management-portal",
  title: "Student Management Portal",
  // Update your actual GitHub repository URL here:
  githubUrl: "https://github.com/AnjaliH-er/student-management-portal",
  // When you have a live demo (e.g. on Vercel), add it here:
  liveUrl: "https://your-demo-url.vercel.app",
  ...
}
```
*Note: If `liveUrl` is `null`, the "Live Demo" button is hidden automatically.*

### 4. How to Add Certifications
Open `src/data/certifications.js`. Simply add your certificates to the `certifications` array:
```javascript
export const certifications = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Certificate",
    issuer: "Coursera / Meta",
    date: "2024",
    credentialId: "XYZ-123456",
    verificationUrl: "https://coursera.org/verify/XYZ-123456",
    certificateFile: null
  }
];
```
As soon as items are added, the "Coming soon" notice automatically transforms into certificate cards.

### 5. How to Update Cumulative CGPA
Open `src/data/education.js` and set:
```javascript
cgpa: "8.7 / 10", // Set your latest confirmed cumulative CGPA
```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended — 2 Minutes)
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Anjali Hiremath portfolio"
   git branch -M main
   git remote add origin https://github.com/AnjaliH-er/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Vercel automatically detects **Vite** framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live on a fast, global HTTPS domain (e.g. `anjali-hiremath.vercel.app`) with automatic updates on every git push!

### Option 2: Deploy to GitHub Pages
1. In `vite.config.js`, add the base repository path:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repository name
     plugins: [react()],
   });
   ```
2. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, enable **GitHub Pages** from the `gh-pages` branch.

---

## ♿ Accessibility & Performance Features

- **Semantic HTML5 Landmarks**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Keyboard Navigation & Visible Focus Rings**: High-contrast purple focus rings on all interactive elements
- **Accessible Dialogs**: Accessible ARIA roles (`role="dialog"`, `aria-modal="true"`), ESC key listener, and backdrop dismissal
- **Reduced Motion Support**: `@media (prefers-reduced-motion: reduce)` rules disable rapid animations for sensitive users
- **Zero Heavy Backend Bloat**: Fast initial page load with minimal JavaScript footprint (<70KB gzipped).

---

## 📄 License
This project is open-source and created for **Anjali Hiremath**.
Feel free to use and adapt this portfolio template.
