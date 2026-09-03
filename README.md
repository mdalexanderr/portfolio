# alexweb — Developer Portfolio

A rich white / warm cream, premium developer portfolio with deep navy typography
and elegant gold accents, reconstructed from the supplied reference screenshot.
Built with **React + Vite + Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview the production build
```

## Stack

- React 19 + Vite
- Tailwind CSS v4 (design tokens in `src/index.css` → `@theme`)
- Lucide icons
- Inter (Google Fonts, with system fallbacks)

## Structure

```
src/
  main.jsx                 # entry
  App.jsx                  # section order + scroll-reveal observer
  index.css                # design tokens, base styles, utilities
  components/
    Navbar.jsx             # fixed nav + mobile menu
    Hero/Hero.jsx          # clean full-viewport hero: tech stack (left) + signature (right)
    Hero/IntroBlock.jsx    # intro statement (badge/headline/CTAs) placed under the stats bar
    Stats.jsx              # 4-stat trust bar
    Services.jsx           # 6 service cards
    FeaturedProjects.jsx   # 3 project cards
    Technologies.jsx       # tech pills
    Testimonials.jsx       # 3 testimonial cards
    ProjectCTA.jsx         # gradient CTA banner
    Footer.jsx             # 4-column footer
    ui/                    # Button, Badge, SectionHeading
    tech/TechLogo.jsx      # inline SVG brand logos
```

## ⚠️ Content placeholders (must be replaced before publishing)

| Item | Status | Where |
| --- | --- | --- |
| Project names/descriptions (TechMart, Fashionista, HomeComfort) | **Demo placeholder** — replace with real project names once the screenshot → project mapping is confirmed | `src/components/FeaturedProjects.jsx` |
| Project card images | **Real screenshots** from `assets/` are used as card images | `assets/web/Screenshot_1.jpg`, `Screenshot_5.jpg`, `Screenshot_9.jpg` (web-optimized copies of `assets/Screenshot_1.png`, `Screenshot_5.png`, `Screenshot_9.png`) |
| Testimonials (John Smith, Sarah Johnson, Michael Brown) | **Demo placeholder** — NOT genuine client reviews. Replace with real, verifiable testimonials (with permission) | `src/components/Testimonials.jsx` |
| Social links / phone number | Placeholder `#` / sample values | `src/components/Footer.jsx` |

### Screenshot → real project mapping (to be confirmed)

The `assets/` folder contains 14 real project screenshots. Once you confirm which
screenshot belongs to which project (e.g. Favonia Hobbies, YouTutor, Kazi Technical
Systems, Pinnacle Capital Consultancy, Practical Doctrinas PLT, Learn to Grow Academy,
Amalfi), update the `name`/`category`/`desc` fields in `FeaturedProjects.jsx` — the
card layout stays identical.

## Accessibility & performance

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- Keyboard-focusable controls with visible focus rings
- `prefers-reduced-motion` respected (reveal animations disabled)
- Lazy-loaded images, no layout shift on the mockup (fixed heights)
- Inline SVG brand logos (no icon-font dependency beyond lucide)
