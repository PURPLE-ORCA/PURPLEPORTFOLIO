# 💻 Tech Context

## Technologies Used
- **Frontend:**
    - React (JSX)
    - Tailwind CSS
    - Shadcn UI
    - Framer Motion
    - Iconify (for icons)
- **Backend:** (Not explicitly used in this frontend-only portfolio, but relevant for full-stack context)
    - Node.js (conceptual)
    - Python (conceptual)
- **Deployment:**
    - Netlify

## Development Setup
- **Package Manager:** npm
- **Bundler/Dev Server:** Vite (as indicated by `vite.config.js` and `index.html`)
- **Linting/Formatting:** ESLint (as indicated by `eslint.config.js`)

## Technical Constraints
- **No TypeScript:** Adherence to JSX only as per `projectbrief.md`.
- **Minimal Dependencies:** Prioritizing a lean dependency tree.
- **Performance:** Focus on optimizing load times and animation smoothness.

## Dependencies
- `react`
- `react-dom`
- `framer-motion`
- `@iconify/react`
- `lucide-react`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `tailwindcss-animate`

## Tool Usage Patterns
- **Component Scaffolding:** Manual creation of component files within `src/pages/Home/components`.
- **Styling:** Direct application of Tailwind CSS utility classes in JSX.
- **Animation:** Declarative animation definitions using Framer Motion's `motion` component and hooks.
- **Iconography:** Using `Icon` component from `@iconify/react` for various icons, and direct import of `lucide-react` icons.
