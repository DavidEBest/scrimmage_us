# Scrimmage.us Website

A React-based static website for Scrimmage.us - a software consulting business targeting small businesses and creators who need help building their first production software products.

## 🎯 Project Overview

This website showcases the "weird, colorful, intentionally imperfect" brand aesthetic while providing a professional presence for software consulting services. The site focuses on 0→1 projects for small businesses, startups, and creators.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scrimmage-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🛠 Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **Linting**: ESLint 9.30.1

## 🎨 Features

### Design & UX
- Colorful, intentionally imperfect aesthetic
- Mobile-first responsive design
- Smooth animations and transitions
- Accessible navigation and forms

### Dark Mode
- Class-based dark mode implementation
- Persists user preference in localStorage
- Respects system theme preferences
- Smooth transitions between themes

### Pages & Sections
- **Home**: Hero section with services preview
- **Services**: Detailed service offerings (Software Development, Technical Architecture, SDLC Process)
- **Work**: Case studies and portfolio showcase
- **Process**: 5-step development methodology
- **Writing**: Blog posts and technical insights
- **Contact**: Contact form and project inquiry system

### Technical Features
- React Router for client-side routing
- Custom hooks for dark mode management
- Reusable component architecture
- Performance-optimized build process

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DarkModeToggle.jsx
│   ├── Footer.jsx
│   └── Navigation.jsx
├── hooks/               # Custom React hooks
│   └── useDarkMode.js
├── pages/               # Page components
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Process.jsx
│   ├── Services.jsx
│   ├── Work.jsx
│   └── Writing.jsx
├── utils/               # Utility functions
├── App.jsx              # Main application component
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## 🎨 Styling Guidelines

### Color Palette
- **Primary**: Red variants (#ef4444 to #7f1d1d)
- **Secondary**: Blue variants (#0ea5e9 to #0c4a6e)
- **Accent**: Yellow variants (#eab308 to #713f12)

### Design Principles
- Colorful gradients for visual interest
- Intentionally imperfect, approachable aesthetic
- Consistent spacing using Tailwind utilities
- Mobile-first responsive breakpoints

### Dark Mode Implementation
- Uses Tailwind's class-based dark mode (`darkMode: 'class'`)
- Dark variants applied consistently across components
- Maintains brand colors while ensuring readability

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready for deployment.

### Hosting Options
The site is designed for static hosting platforms:
- **Recommended**: Netlify, Vercel, Railway, Digital Ocean Static Sites
- **Budget-friendly**: GitHub Pages, Surge.sh
- Any static file hosting service

### Deployment Notes
- All routes are client-side (SPA)
- Configure hosting for single-page application routing
- No server-side rendering required
- Optimized for performance and SEO

## 🔧 Development

### Code Quality
- ESLint configuration for React best practices
- Consistent component structure and naming
- Accessibility considerations in component design

### Performance Considerations
- Vite for fast development and optimized builds
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## 🤝 Contributing

1. Follow the existing code style and structure
2. Use meaningful component and variable names
3. Maintain accessibility standards
4. Test responsive design on multiple screen sizes
5. Ensure dark mode compatibility for new components

## 📞 Support

For questions about the codebase or deployment, refer to the project documentation or contact the development team.

---

Built with ❤️ for small businesses and creators who are building their first production software products.