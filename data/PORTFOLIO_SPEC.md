# Portfolio Website Specification

## Project Overview
Personal portfolio website for **Ashish Kumar Jha** - Software Developer specializing in Python, Automation & Scalable System Design.

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Build**: Turbopack
- **Deployment**: Vercel (recommended)

## Design Philosophy
- **Minimalist & Clean**: Reflecting "Build with precision. Think with clarity. Live with alignment."
- **Developer-Centric**: Dark theme primary (Arch Linux/NeoVim aesthetic)
- **Performance-First**: Fast loading, optimized images, smooth animations
- **Mobile-Responsive**: Progressive enhancement approach

## Site Structure

### 1. Homepage (`/`)
**Hero Section:**
- Full-screen hero with professional headshot
- Name: "Ashish Kumar Jha"
- Tagline: "Software Developer | Specializing in Python, Automation & Scalable System Design | FastAPI | Docker | MongoDB | Clean Architecture > Hacks | I Use Arch & NeoVim, BTW"
- Location: New Delhi, Delhi, India
- CTA buttons: "View Projects", "Contact Me"

**About Section:**
- Philosophy quote: "What drives me is not just problem-solving, but problem-understanding—the kind that makes complexity collapse into clarity."
- Brief background on current role (SDE2 at Leadzen.ai)
- Technical approach and values

**Skills Overview:**
- Top Skills: CLI, FastAPI, Next.js
- Technical Stack: Python, Docker, MongoDB, TypeScript, React
- Tools: Arch Linux, NeoVim, Git

### 2. Projects Page (`/projects`)
**Featured Projects:**

1. **Facebook Ads Library Scraper** ⭐ 26 stars
   - Language: Python
   - Description: Scraper to extract Facebook ads from Ads Library
   - Tech: Web Scraping, Python
   - Links: GitHub, Live Demo (if applicable)

2. **Ecommerce Platform** ⭐ 2 stars
   - Language: Python
   - Description: Robust e-commerce application with FastAPI, PostgreSQL, Docker
   - Tech: FastAPI, PostgreSQL, Docker
   - Links: GitHub, Live Demo

3. **Browser-Native Xdotcom-Scraper** ⭐ 2 stars
   - Language: Python
   - Description: Modern web scraper with PyDoll for JavaScript-heavy sites
   - Tech: PyDoll, Web Scraping, Cloudflare Bypass
   - Links: GitHub

4. **Portmux** ⭐ 1 star
   - Language: Python
   - Description: SSH port forwarding management without tmux complexity
   - Tech: SSH, Python, CLI
   - Links: GitHub

**Game Development Projects:**
- Spook-Alle (Pygame)
- Space-Invaders
- Flappy-bird
- Mike vs Godzilla

**DevOps & Automation:**
- Rsync-For-Remote-Development
- Ansible-Scripts
- Pihole-Adblocker-Docker

**ML/AI Projects:**
- Music-genre-Identification (Jupyter Notebook)
- Genetic Algorithm Reinforcement Training

### 3. Experience Page (`/experience`)
**Current Position:**
- **SDE2** at Leadzen.ai (March 2025 - Present, 7 months)
- Location: New Delhi, Delhi, India

**Previous Role:**
- **Software Development Engineer - 1** at Leadzen.ai (February 2023 - March 2025, 2 years 2 months)

**Education:**
1. **Bachelor of Technology - BTech, Information Technology**
   - Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow
   - October 2023 - October 2026

2. **High School Diploma, Information Technology**
   - Ambedkar DSEU Shakarpur Campus-I
   - October 2020 - May 2023

3. **Secondary School**
   - Central Board of Secondary Education
   - April 2019 - June 2020

### 4. Contact Page (`/contact`)
**Contact Information:**
- **Email**: ashishk2004a@gmail.com
- **Phone**: 8700745395
- **LinkedIn**: linkedin.com/in/ashishk2004a
- **GitHub**: github.com/Ashish-Github193

**Contact Form:**
- Name, Email, Subject, Message fields
- Form validation
- Email integration (optional)

## Component Architecture

### Core Components
```
components/
├── layout/
│   ├── Header.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with social links
│   └── ThemeToggle.tsx     # Dark/light mode switch
├── sections/
│   ├── Hero.tsx            # Homepage hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills grid
│   ├── Experience.tsx      # Timeline component
│   └── Contact.tsx         # Contact form
├── projects/
│   ├── ProjectGrid.tsx     # Projects layout
│   ├── ProjectCard.tsx     # Individual project card
│   ├── ProjectFilter.tsx   # Filter by technology
│   └── FeaturedProject.tsx # Highlighted project
└── ui/
    ├── Button.tsx          # Reusable button component
    ├── Card.tsx            # Card component
    ├── Badge.tsx           # Skill/tech badges
    └── Typography.tsx      # Text components
```

## Responsive Design Requirements

### Breakpoints (Tailwind CSS)
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile-First Features
- Hamburger menu for navigation
- Stack layout for hero section
- Grid adjustments for project cards
- Touch-friendly buttons and links

## Performance Requirements
- **Page Load Time**: < 2 seconds
- **Core Web Vitals**: All green scores
- **Image Optimization**: Next.js Image component
- **Bundle Size**: Minimize JavaScript payload
- **SEO Score**: 90+ on Lighthouse

## SEO & Metadata

### Global Meta Tags
```typescript
export const metadata: Metadata = {
  title: "Ashish Kumar Jha - Software Developer",
  description: "Software Developer specializing in Python, Automation & Scalable System Design. SDE2 at Leadzen.ai with expertise in FastAPI, Docker, MongoDB.",
  keywords: "Software Developer, Python, FastAPI, Docker, MongoDB, Next.js, Full Stack Developer",
  authors: [{ name: "Ashish Kumar Jha" }],
  creator: "Ashish Kumar Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashishkumarjha.dev",
    title: "Ashish Kumar Jha - Software Developer",
    description: "Software Developer specializing in Python, Automation & Scalable System Design",
    siteName: "Ashish Kumar Jha Portfolio"
  }
}
```

### Page-Specific SEO
- Unique titles and descriptions for each page
- Structured data for professional profile
- Open Graph images for social sharing

## Theme System

### Color Palette
**Dark Theme (Primary):**
- Background: `#0a0a0a`
- Surface: `#1a1a1a`
- Primary: `#ffffff`
- Secondary: `#a3a3a3`
- Accent: `#3b82f6` (Blue)

**Light Theme:**
- Background: `#ffffff`
- Surface: `#f9fafb`
- Primary: `#1a1a1a`
- Secondary: `#6b7280`
- Accent: `#3b82f6` (Blue)

### Typography
- **Headings**: Geist Sans (600-700 weight)
- **Body**: Geist Sans (400-500 weight)
- **Code**: Geist Mono (400 weight)
- **Accent**: Geist Sans (500 weight)

## Animation & Interactions

### Micro-Interactions
- Button hover states with smooth transitions
- Card hover effects with subtle elevation
- Smooth scroll for navigation links
- Loading states for dynamic content

### Page Transitions
- Fade in animations for sections
- Stagger animations for project grid
- Smooth scroll behavior

## Development Guidelines

### Code Standards
- TypeScript strict mode enabled
- ESLint + Prettier configuration
- Component prop interfaces
- Consistent file naming (PascalCase for components)

### Performance Optimizations
- Image optimization with Next.js Image
- Lazy loading for below-the-fold content
- Code splitting for route-based chunks
- Minimize client-side JavaScript

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## Deployment & Hosting

### Recommended Stack
- **Hosting**: Vercel (seamless Next.js integration)
- **Domain**: Custom domain (ashishkumarjha.dev recommended)
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://ashishkumarjha.dev
CONTACT_EMAIL=ashishk2004a@gmail.com
```

## Future Enhancements
- Blog section for technical articles
- Resume download functionality
- Project case studies with detailed breakdowns
- Analytics integration (Google Analytics/Plausible)
- Contact form email integration
- CMS integration for dynamic content management