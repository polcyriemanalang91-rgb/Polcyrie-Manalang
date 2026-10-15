# Fresh Graduate Personal Portfolio

A modern, responsive, minimalist personal portfolio website crafted for fresh graduates and entry-level software developers looking to showcase their academic achievements, capstone projects, technical skills, and credentials to recruiters and hiring managers.

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
   - Brand initials badge and graduate title.
   - Smooth-scrolling links with active section scroll spy (**Home**, **Work**, **About**, **Contact**).
   - "Personalize" quick editor button.
   - "Resume" modal preview button.
   - Responsive mobile drawer menu.

2. **Hero (Home)**
   - Welcoming headline: *"Hello, I'm [Your Name]."*
   - Subtitle: *"A Fresh Graduate Ready to Learn, Grow, and Make an Impact."*
   - Clear value proposition highlighting enthusiasm, adaptability, creativity, and willingness to learn.
   - Dual prominent buttons: **"View My Work"** and **"Contact Me"**, plus **"Resume CV"**.
   - Profile photo with an elegant circular frame, soft latte borders, and subtle organic badges.
   - "Open to Work" status indicator pill with a gentle pulsing sage-green dot.

3. **Work (Projects)**
   - Category filtering: **All Projects**, **Capstone**, **Full-Stack**, **Frontend**, **UI/UX & Academic**.
   - Balanced cards featuring thumbnails, role tags, descriptions, and technology chips.
   - **Interactive Project Modal**: Deep-dive popup highlighting project motivation, architecture, key features, and a dedicated *"What I Learned as a Fresh Graduate"* reflection section.
   - Direct links for **Live Demo** and **Source Code (GitHub)**.

4. **About (Journey & Capabilities)**
   - Friendly personal introduction and career goals statement.
   - **Education Subsection**: Degree, university, graduation honors (*Magna Cum Laude / Dean's List*), and relevant coursework tags.
   - **Organized Skills Subsection**: Filterable domain badges with proficiency levels:
     - Frontend Development
     - Backend & Databases
     - Developer Tools, Testing & Workflow
     - UI/UX & Design Principles
     - Transferable Soft Skills (Collaboration, Adaptability, Problem-Solving)
   - **Certifications & Training**: Verified milestones with issuer badges and verification links.
   - **Campus Leadership & Activities**: Student council, peer tutoring, and hackathon highlights.

5. **Contact**
   - Heading: *"Let's Connect!"*
   - Recruiter-friendly availability note (*Full-time roles & internships*).
   - Direct Email with **1-click Copy to Clipboard** and instant confirmation toast.
   - Validated contact form with real-time feedback for Full Name, Email, Subject, and Message.
   - Safe dual dispatch: client celebration with warm confetti and formatted pre-filled email draft.

6. **Interactive Extras**
   - **Personalize Modal**: Preview your actual name, headline, email, and location live in your browser.
   - **Printable Resume Preview**: Recruiter-ready single-sheet CV formatted in the same light-brown palette with `window.print()` support.
   - Accessible, mobile-first responsive design respecting `prefers-reduced-motion`.

---

## 🛠️ How to Customize Your Content

All data is centrally configured in one file:

```
src/data/portfolioData.ts
```

Open that file to customize:
- Your name, headline, email, location, and social links.
- Your degree, university, graduation year, and GPA/honors.
- Your capstone and coursework projects.
- Your skills, tools, and certifications.
- Your profile photo (replace the image URL with your own photo or drop a file into `src/assets/`).

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

### Deploy to Vercel

```powershell
npx.cmd vercel
```
