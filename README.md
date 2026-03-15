# Cynthia Niganze — Neon Terminal Dark Portfolio

A personal portfolio built with **React + Vite + Tailwind CSS** in a neon terminal aesthetic.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
src/
├── App.jsx                  # Root layout
├── main.jsx                 # Entry point
├── index.css                # Global styles, scanlines, cursor, animations
├── hooks/
│   └── useReveal.js         # Intersection observer scroll reveal
└── components/
    ├── Navbar.jsx            # Sticky nav with active section tracking
    ├── Hero.jsx              # Typewriter, terminal window, grid bg
    ├── Services.jsx          # 4 service cards with glow accents
    ├── About.jsx             # Bio, skill bars, timeline
    ├── Projects.jsx          # Project cards with status badges
    ├── Contact.jsx           # Terminal-styled contact form
    ├── Footer.jsx            # Scrolling marquee + links
    └── CustomCursor.jsx      # Glowing dot + ring cursor
```

## 🎨 Design System

| Token       | Value                    |
|-------------|--------------------------|
| Navy 950    | `#04080F` (background)   |
| Mint        | `#3ECFA0` (primary)      |
| Sky         | `#4AAFEB` (secondary)    |
| Lemon       | `#F5E642` (warning/data) |
| Rose        | `#FF7EB3` (accent)       |
| Font Display | Syne (700, 800)         |
| Font Mono   | Space Mono               |
| Font Body   | DM Sans                  |

## ✏️ Customization

- **Your photo**: Add `src/assets/profile.jpg` and import in `Hero.jsx`
- **Projects**: Edit the `PROJECTS` array in `Projects.jsx`
- **Skills**: Edit the `SKILLS` array in `About.jsx`
- **Contact info**: Update email/phone in `Contact.jsx` and `Footer.jsx`
- **CV link**: Replace `href="#"` in About and Hero with your actual CV URL

## 🌐 Deploy

```bash
npm run build      # outputs to /dist
# Deploy /dist to Vercel, Netlify, or GitHub Pages
```
