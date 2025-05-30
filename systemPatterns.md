# ⚙️ System Patterns

## Architecture
The project follows a component-based architecture, typical for React applications.
- **Pages:** Top-level components representing different views of the application (e.g., `Home.jsx`).
- **Components:** Reusable UI elements and logical units, organized under `src/components` and nested within page-specific `components` folders (e.g., `src/pages/Home/components`).
- **UI Library:** Shadcn UI is used for foundational UI components, providing a consistent and accessible design system.

## Key Technical Decisions
- **JSX Only:** Adherence to JSX for component definition, avoiding TypeScript for simplicity as per `projectbrief.md`.
- **Tailwind CSS:** Utility-first CSS framework for rapid and consistent styling.
- **Framer Motion:** Utilized for declarative animations, enhancing user experience with smooth transitions and effects.
- **Modular Design:** Emphasis on breaking down large components into smaller, focused, and reusable sub-components to improve maintainability and readability.

## Design Patterns in Use
- **Component Pattern:** Encapsulating UI and logic into independent, reusable components.
- **Container/Presentational Pattern:** (Implicitly) Separating data-fetching/logic (container) from UI rendering (presentational).
- **Hook Pattern:** Leveraging React Hooks (`useState`, `useEffect`) for state management and side effects within functional components.

## Component Relationships
- `Home.jsx` acts as the main container for the portfolio page, orchestrating the layout and passing necessary data (like `skills`, `projects`, `stats`) to its child components.
- Child components (e.g., `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `StatsSection`, `ContactSection`, `EasterEgg`, `Footer`) are responsible for rendering specific sections of the page and managing their internal state/logic.
- UI components from `src/components/ui` are imported and used across various custom components.

## Critical Implementation Paths
- **Animation Integration:** Framer Motion is crucial for the dynamic and engaging feel of the portfolio. Animations are applied to various elements for entrance, hover, and interactive effects.
- **Data Flow:** Data (skills, projects, stats) is defined in `Home.jsx` and passed down as props to relevant child components.
- **Responsiveness:** Tailwind CSS's utility-first approach is used to ensure the layout adapts well to different screen sizes.
