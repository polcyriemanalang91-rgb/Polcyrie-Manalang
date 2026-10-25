# Polcyrie V. Manalang - Personal Portfolio

A modern, responsive, minimalist personal portfolio website crafted for fresh graduates and entry-level IT professionals looking to showcase their academic achievements, capstone projects, technical skills, and credentials to recruiters and hiring managers.

Designed with an **aesthetic light-brown color palette** that feels warm, clean, inviting, and easy on the eyes.

---

## 🎨 Color Palette & Design Tokens

| Token | Hex Value | Role / Usage |
|---|---|---|
| **Warm Cream** | `#FAF7F2` | Primary page canvas & light card backgrounds |
| **Light Beige** | `#F0E6D8` | Section backgrounds, badges, secondary containers |
| **Soft Taupe** | `#D6C3AE` | Borders, subtle dividers, and decorative accents |
| **Latte Brown** | `#B89B7D` | Secondary text accents, icon highlights |
| **Coffee Brown** | `#80634D` | Primary CTAs, active buttons, headings emphasis |
| **Deep Cocoa** | `#49382E` | High-contrast headings and primary typography |
| **Muted Sage** | `#A9B5A0` | Fresh, organic complementary accent (status & honors) |

---

## 🚀 Website Structure & Sections

1. **Sticky Header & Navigation**
   - Personal initials badge and graduate title.
   - Smooth-scrolling links with active section scroll spy (**Home**, **Work**, **About**, **Contact**).
   - "Resume" modal preview button.
   - Responsive mobile drawer menu.

2. **Hero (Home)**
   - Headline: *"Hello, I'm Polcyrie V. Manalang."*
   - Subtitle: *"A Fresh Graduate Ready to Learn, Grow, and Make an Impact."*
   - Clear value proposition highlighting enthusiasm, adaptability, creativity, and willingness to learn.
   - Dual prominent buttons: **"View My Work"** and **"Contact Me"**, plus **"Resume CV"**.
   - Profile photo with an elegant circular frame, soft latte borders, and subtle organic badges.
   - "Available for Full-time Roles & Internships" status indicator pill.

3. **Work (Projects)**
   - Category filtering: **All Projects**, **Capstone**, **Full-Stack**, **Frontend**, **UI/UX**.
   - Balanced cards featuring thumbnails, role tags, descriptions, and technology chips.
   - **Interactive Project Modal**: Deep-dive popup highlighting project motivation, architecture, key features, and a dedicated *"What I Learned as a Fresh Graduate"* reflection section.
   - Direct links for **Live Demo** and **Source Code (GitHub)**.

4. **About (Journey & Capabilities)**
   - Friendly personal introduction and career goals statement.
   - **Education Subsection**: BS in Information Technology (NEUST - MGT, Talavera Off Campus), 2022 – 2026.
   - **Organized Skills Subsection**: Filterable domain badges with proficiency levels:
     - Frontend Development
     - Backend & Databases
     - Developer Tools, Testing & Workflow
     - UI/UX & Design Principles
     - Transferable Soft Skills (Collaboration, Adaptability, Problem-Solving)
   - **Certifications & Training**: Verified milestones with issuer badges and verification links.
   - **Campus Leadership & Activities**: Student initiatives, peer tutoring, and hackathon highlights.

5. **Contact**
   - Heading: *"Let's Connect!"*
   - Recruiter-friendly availability note (*Full-time roles & internships*).
   - Direct Email with **1-click Copy to Clipboard** and instant confirmation toast.
   - Validated contact form with real-time feedback for Full Name, Email, Subject, and Message.
   - Message draft formatted for your email client with warm confetti celebration.

---

## 🛠️ How to Customize Your Content

All data is centrally configured in one file:

```
src/data/portfolioData.ts
```

Open that file to customize:
- Your name, headline, email, phone, location, and social links.
- Your degree, university, graduation year, and GPA/honors.
- Your capstone and coursework projects.
- Your skills, tools, and certifications.
- Your profile photo (`public/picture.jpg`).

---

## 💻 Development & Deployment

### Run Locally

In PowerShell or terminal:

```powershell
npm.cmd run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```powershell
npm.cmd run build
```

The optimized static files will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **GitHub Pages**.
