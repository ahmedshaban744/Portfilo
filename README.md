# Ahmed Shaban Mohamed — Portfolio

A premium, dark-mode portfolio website built with React + Tailwind CSS.

## Features
- ⚡ Animated loading screen
- 🎯 Typewriter hero with live title rotation
- 📊 Animated skill progress bars (scroll-triggered)
- 🗓️ Interactive experience timeline
- 🃏 Project cards with hover effects
- 📬 Contact form (opens native email client)
- 📱 Fully responsive (mobile + desktop)
- 🎨 Custom grid background + glow effects

## Tech Stack
- **React 18** — functional components
- **Tailwind CSS** — utility-first styling
- **Vite** — fast dev server & build
- **Google Fonts** — Syne (display) + JetBrains Mono (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` in your browser.

## Customization

- **Personal info**: Update contact links in `Contact.jsx` and `Footer.jsx`
- **Profile photo**: Replace the emoji avatar in `Hero.jsx` with an `<img>` tag
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Skills levels**: Adjust the `level` percentages in `Skills.jsx`
- **Colors**: The palette uses Tailwind's cyan/blue/purple — change in each component

## Deployment

Deploy to **Vercel** (recommended):
```bash
npm install -g vercel
vercel --prod
```

Or **Netlify**:
```bash
npm run build
# Upload the `dist/` folder to Netlify
```
