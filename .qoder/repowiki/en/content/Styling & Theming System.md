# Styling & Theming System

<cite>
**Referenced Files in This Document**
- [index.css](file://src/index.css)
- [package.json](file://package.json)
- [vite.config.ts](file://vite.config.ts)
- [main.tsx](file://src/main.tsx)
- [Hero.tsx](file://src/components/Hero.tsx)
- [Navigation.tsx](file://src/components/Navigation.tsx)
- [Footer.tsx](file://src/components/Footer.tsx)
- [BentoSection.tsx](file://src/components/BentoSection.tsx)
- [ImpactSection.tsx](file://src/components/ImpactSection.tsx)
- [ProjectsSection.tsx](file://src/components/ProjectsSection.tsx)
- [ContactSection.tsx](file://src/components/ContactSection.tsx)
- [EducationSection.tsx](file://src/components/EducationSection.tsx)
- [content.ts](file://src/data/content.ts)
- [index.html](file://index.html)
</cite>

## Update Summary
**Changes Made**
- Added comprehensive font smoothing optimizations with -webkit-font-smoothing and -moz-osx-font-smoothing properties
- Implemented text-rendering optimization with optimizeSpeed for improved glyph rendering performance
- Enhanced smooth scrolling behavior with scroll-behavior: smooth for better user experience
- Introduced GPU acceleration system for Framer Motion components with will-change transform and opacity properties
- Added backface-visibility and transform-style optimizations for 3D rendering performance
- Updated performance considerations section with new optimization techniques

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Performance Optimizations](#performance-optimizations)
7. [Dependency Analysis](#dependency-analysis)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)
10. [Appendices](#appendices)

## Introduction
This document describes the styling and theming system built with Tailwind CSS v4 in this React application. It explains the custom color palette inspired by Material Design principles, the responsive breakpoint system, utility class usage patterns, glass-morphism design elements, animation and transition configurations, typography hierarchy, and component-specific styling approaches. The system now includes comprehensive performance and rendering optimizations including font smoothing properties, text-rendering optimizations, smooth scrolling behavior, and GPU acceleration for Framer Motion components.

## Project Structure
The styling pipeline is driven by Tailwind CSS v4 configured via Vite. The global stylesheet defines theme tokens and base styles with advanced performance optimizations, while individual components apply utility classes and motion-driven transitions. The build integrates Tailwind's compiler through the official Vite plugin.

```mermaid
graph TB
HTML["index.html<br/>Viewport meta"] --> Main["main.tsx<br/>Entry point"]
Main --> CSS["index.css<br/>@theme, @layer base, custom utilities<br/>Font smoothing & GPU optimizations"]
CSS --> TW["Tailwind v4 Compiler"]
Main --> C1["Hero.tsx<br/>Framer Motion animations"]
Main --> C2["Navigation.tsx<br/>Glass navigation & smooth scrolling"]
Main --> C3["Footer.tsx"]
Main --> C4["BentoSection.tsx<br/>Skill bars & hover effects"]
Main --> C5["ImpactSection.tsx<br/>SVG charts & GPU acceleration"]
Main --> C6["ProjectsSection.tsx<br/>Hover cards & transitions"]
Main --> C7["ContactSection.tsx"]
Main --> C8["EducationSection.tsx"]
C1 --> Content["content.ts"]
C2 --> Content
C3 --> Content
C4 --> Content
C5 --> Content
C6 --> Content
C7 --> Content
C8 --> Content
```

**Diagram sources**
- [index.html:1-14](file://index.html#L1-L14)
- [main.tsx:1-11](file://src/main.tsx#L1-L11)
- [index.css:1-87](file://src/index.css#L1-L87)
- [vite.config.ts:1-25](file://vite.config.ts#L1-L25)
- [Hero.tsx:1-135](file://src/components/Hero.tsx#L1-L135)
- [Navigation.tsx:1-98](file://src/components/Navigation.tsx#L1-L98)
- [Footer.tsx:1-36](file://src/components/Footer.tsx#L1-L36)
- [BentoSection.tsx:1-87](file://src/components/BentoSection.tsx#L1-L87)
- [ImpactSection.tsx:1-542](file://src/components/ImpactSection.tsx#L1-L542)
- [ProjectsSection.tsx:1-100](file://src/components/ProjectsSection.tsx#L1-L100)
- [ContactSection.tsx:1-39](file://src/components/ContactSection.tsx#L1-L39)
- [EducationSection.tsx:1-58](file://src/components/EducationSection.tsx#L1-L58)
- [content.ts:1-103](file://src/data/content.ts#L1-L103)

**Section sources**
- [index.html:1-14](file://index.html#L1-L14)
- [main.tsx:1-11](file://src/main.tsx#L1-L11)
- [index.css:1-87](file://src/index.css#L1-L87)
- [vite.config.ts:1-25](file://vite.config.ts#L1-L25)

## Core Components
- Theme tokens and base styles: The global stylesheet defines fonts, semantic colors, surface palettes, and radius tokens. It also sets base border and typography defaults and applies advanced font smoothing and text rendering optimizations.
- Glass-morphism utilities: A reusable class composes backdrop blur, translucency, and subtle borders for navigation surfaces.
- Component-specific utilities: Cards, skill bars, and hover states use consistent spacing, transitions, and shadows.
- GPU acceleration layer: Special CSS selectors target Framer Motion components for hardware-accelerated animations.

Key implementation references:
- Theme tokens and base layer: [index.css:3-50](file://src/index.css#L3-L50)
- Glass utility: [index.css:68-70](file://src/index.css#L68-L70)
- Impact card styles: [index.css:72-78](file://src/index.css#L72-L78)
- Skill bar backgrounds and fills: [index.css:80-86](file://src/index.css#L80-L86)
- GPU acceleration layer: [index.css:58-66](file://src/index.css#L58-L66)

**Section sources**
- [index.css:1-87](file://src/index.css#L1-L87)

## Architecture Overview
Tailwind v4 compiles the theme tokens and utility classes into production CSS with performance optimizations. The Vite plugin runs in development and build modes, resolving aliases and enabling HMR. Components import the global stylesheet and compose Tailwind utilities per design intent, with automatic GPU acceleration for motion components.

```mermaid
sequenceDiagram
participant Dev as "Developer"
participant Vite as "Vite Dev Server"
participant Plugin as "@tailwindcss/vite"
participant TW as "Tailwind v4"
participant CSS as "index.css<br/>Performance Optimizations"
participant App as "React Components<br/>with Motion"
Dev->>Vite : Start dev server
Vite->>Plugin : Initialize plugin
Plugin->>TW : Load config and theme tokens
CSS->>TW : Parse @theme, @layer base, custom utilities<br/>Font smoothing & GPU acceleration
TW-->>CSS : Compiled utilities with optimizations
CSS-->>App : Global styles applied with performance features
App-->>Vite : Components render with utilities & GPU acceleration
Vite-->>Dev : Hot reload on change
```

**Diagram sources**
- [vite.config.ts:1-25](file://vite.config.ts#L1-L25)
- [index.css:1-87](file://src/index.css#L1-L87)
- [main.tsx:1-11](file://src/main.tsx#L1-L11)

## Detailed Component Analysis

### Color Palette and Material Design Principles
The theme defines a cohesive palette with primary, secondary, tertiary, surface, background, and outline tokens. Surface variants and containers provide layered depth, while fixed tonal accents support interactive states. This aligns with Material Design's emphasis on roles and tonal relationships.

- Semantic tokens: [index.css:8-31](file://src/index.css#L8-L31)
- Surface containers and radii: [index.css:23-39](file://src/index.css#L23-L39)

Usage examples across components:
- Primary text and accents: [Hero.tsx:25](file://src/components/Hero.tsx#L25), [Navigation.tsx:45](file://src/components/Navigation.tsx#L45)
- Secondary labels and borders: [Hero.tsx:22](file://src/components/Hero.tsx#L22), [Footer.tsx:10](file://src/components/Footer.tsx#L10)
- Tertiary fixed accents for icons and highlights: [BentoSection.tsx:65](file://src/components/BentoSection.tsx#L65), [ProjectsSection.tsx:17](file://src/components/ProjectsSection.tsx#L17)

Guidelines for extension:
- Add new semantic roles by introducing paired tokens (e.g., --color-new-role and --color-on-new-role).
- Define container variants for surfaces to maintain depth hierarchy.
- Keep contrast ratios sufficient for accessibility (WCAG AA at minimum).

**Section sources**
- [index.css:8-39](file://src/index.css#L8-L39)
- [Hero.tsx:22-29](file://src/components/Hero.tsx#L22-L29)
- [Navigation.tsx:45](file://src/components/Navigation.tsx#L45)
- [Footer.tsx:10](file://src/components/Footer.tsx#L10)
- [BentoSection.tsx:65](file://src/components/BentoSection.tsx#L65)
- [ProjectsSection.tsx:17](file://src/components/ProjectsSection.tsx#L17)

### Responsive Breakpoint System
The design leverages Tailwind's default breakpoints with a consistent max-width container pattern and grid-based layouts. Typical breakpoints used:
- Mobile-first with md, lg grid spans and typography scaling.

Examples:
- Hero grid and padding: [Hero.tsx:13](file://src/components/Hero.tsx#L13)
- Bento content split: [BentoSection.tsx:7](file://src/components/BentoSection.tsx#L7)
- Impact cards grid: [ImpactSection.tsx:69](file://src/components/ImpactSection.tsx#L69)
- Projects layout: [ProjectsSection.tsx:28](file://src/components/ProjectsSection.tsx#L28)

Best practices:
- Prefer container-first layouts with max-w-7xl and responsive gutters.
- Use grid column spans to adapt content density across widths.
- Scale typography with mobile-first units and responsive modifiers.

**Section sources**
- [Hero.tsx:13](file://src/components/Hero.tsx#L13)
- [BentoSection.tsx:7](file://src/components/BentoSection.tsx#L7)
- [ImpactSection.tsx:69](file://src/components/ImpactSection.tsx#L69)
- [ProjectsSection.tsx:28](file://src/components/ProjectsSection.tsx#L28)

### Typography Hierarchy
Typography is defined via CSS variables for headline, body, and label fonts. Components consistently apply font families, weights, letter-spacing, and line-height tokens to maintain rhythm. Advanced font smoothing optimizations ensure crisp text rendering across different platforms.

- Font tokens: [index.css:4-6](file://src/index.css#L4-L6)
- Font smoothing optimizations: [index.css:49-51](file://src/index.css#L49-L51)
- Body and headline usage: [Hero.tsx:25](file://src/components/Hero.tsx#L25), [BentoSection.tsx:18](file://src/components/BentoSection.tsx#L18)
- Label and small caps usage: [Hero.tsx:22](file://src/components/Hero.tsx#L22), [Navigation.tsx:56](file://src/components/Navigation.tsx#L56)

Accessibility tips:
- Maintain readable line lengths and adequate spacing between blocks.
- Prefer relative units for scalable text and avoid hardcoded pixel sizes.
- Font smoothing optimizations improve readability on different operating systems.

**Section sources**
- [index.css:4-6](file://src/index.css#L4-L6)
- [index.css:49-51](file://src/index.css#L49-L51)
- [Hero.tsx:22-25](file://src/components/Hero.tsx#L22-L25)
- [BentoSection.tsx:18](file://src/components/BentoSection.tsx#L18)
- [Navigation.tsx:56](file://src/components/Navigation.tsx#L56)

### Glass-Morphism and Backdrop Effects
Glass navigation uses a translucent background, backdrop blur, and thin border to achieve a frosted effect. This creates depth without sacrificing readability.

- Glass utility class: [index.css:68-70](file://src/index.css#L68-L70)
- Navigation composition: [Navigation.tsx:43](file://src/components/Navigation.tsx#L43)

Implementation notes:
- Combine background alpha with backdrop blur for modern transparency.
- Use low, consistent border opacity to maintain edge definition.
- Ensure sufficient contrast against blurred backgrounds for accessibility.

**Section sources**
- [index.css:68-70](file://src/index.css#L68-L70)
- [Navigation.tsx:43](file://src/components/Navigation.tsx#L43)

### Animations and Transitions
Motion is integrated via a motion library to animate component entry and interactive states. Transitions are applied to hover states and layout changes for smooth feedback. The system now includes GPU acceleration for optimal performance.

- Hero entrance: [Hero.tsx:15-75](file://src/components/Hero.tsx#L15-L75)
- Navigation underline spring: [Navigation.tsx:66-80](file://src/components/Navigation.tsx#L66-L80)
- Impact card hover: [index.css:76-78](file://src/index.css#L76-L78)
- Skill bar fill: [BentoSection.tsx:71-78](file://src/components/BentoSection.tsx#L71-L78)
- Project cards hover: [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
- GPU acceleration: [index.css:58-66](file://src/index.css#L58-L66)

Transition patterns:
- Duration and easing tuned for perceived snappiness and clarity.
- Layout animations use spring physics for natural movement.
- GPU acceleration ensures smooth 60fps animations even on complex components.

**Section sources**
- [Hero.tsx:15-75](file://src/components/Hero.tsx#L15-L75)
- [Navigation.tsx:66-80](file://src/components/Navigation.tsx#L66-L80)
- [index.css:76-78](file://src/index.css#L76-L78)
- [BentoSection.tsx:71-78](file://src/components/BentoSection.tsx#L71-L78)
- [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
- [index.css:58-66](file://src/index.css#L58-L66)

### Dark/Light Mode Considerations
The current theme defines light-mode tokens and base styles. To add dark mode:
- Duplicate tokens with dark suffixes and invert semantic roles.
- Provide a media-query-based switch to toggle a root attribute (e.g., data-theme="dark").
- Update base layer to flip text and border colors accordingly.
- Ensure custom utilities remain consistent across modes.

[No sources needed since this section provides general guidance]

### Custom CSS Variables and Base Layer
The base layer establishes global border defaults, background, and typography. It also overrides border radius to zero for a flat design aesthetic and implements advanced font smoothing optimizations.

- Base layer and radius override: [index.css:42-50](file://src/index.css#L42-L50)
- Font smoothing and text rendering: [index.css:49-51](file://src/index.css#L49-L51)
- Smooth scrolling behavior: [index.css:54](file://src/index.css#L54)

Recommendations:
- Centralize radius tokens for uniform corner treatment.
- Keep border defaults minimal to reduce specificity conflicts.
- Font smoothing optimizations improve cross-platform text rendering quality.

**Section sources**
- [index.css:42-50](file://src/index.css#L42-L50)
- [index.css:49-51](file://src/index.css#L49-L51)
- [index.css:54](file://src/index.css#L54)

### Component-Specific Styling Approaches
- Hero: Uses grid columns, aspect-ratio containers, and layered badges to emphasize profile presence and status.
  - Grid and image container: [Hero.tsx:14](file://src/components/Hero.tsx#L14), [Hero.tsx:77-87](file://src/components/Hero.tsx#L77-L87)
- Navigation: Fixed top bar with glass effect, animated active underline, and CTA button.
  - Glass class usage: [Navigation.tsx:43](file://src/components/Navigation.tsx#L43)
  - Animated underline: [Navigation.tsx:66-80](file://src/components/Navigation.tsx#L66-L80)
- Footer: Subtle borders, consistent typography, and link underlines.
  - Border and underline: [Footer.tsx:5](file://src/components/Footer.tsx#L5), [Footer.tsx:25](file://src/components/Footer.tsx#L25)
- BentoSection: Surface containers, skill bars with motion-driven fills, and iconography.
  - Surface containers: [BentoSection.tsx:12](file://src/components/BentoSection.tsx#L12), [BentoSection.tsx:48](file://src/components/BentoSection.tsx#L48)
  - Skill bars: [BentoSection.tsx:70-78](file://src/components/BentoSection.tsx#L70-L78)
- ImpactSection: Card grid with bar indicators, SVG charts, and hover elevation.
  - Card utility: [index.css:72-78](file://src/index.css#L72-L78)
  - Chart paths: [ImpactSection.tsx:13-26](file://src/components/ImpactSection.tsx#L13-L26)
- ProjectsSection: Hoverable cards with tag chips and highlight lists.
  - Card hover: [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
  - Tag chips: [ProjectsSection.tsx:70-76](file://src/components/ProjectsSection.tsx#L70-L76)
- ContactSection: Full-bleed hero with radial gradient overlay and prominent CTAs.
  - Gradient overlay: [ContactSection.tsx:9-11](file://src/components/ContactSection.tsx#L9-L11)
  - Buttons: [ContactSection.tsx:20-34](file://src/components/ContactSection.tsx#L20-L34)
- EducationSection: Hoverable rows with directional layout and period labels.
  - Row hover: [EducationSection.tsx:29](file://src/components/EducationSection.tsx#L29)

**Section sources**
- [Hero.tsx:14](file://src/components/Hero.tsx#L14)
- [Hero.tsx:77-87](file://src/components/Hero.tsx#L77-L87)
- [Navigation.tsx:43](file://src/components/Navigation.tsx#L43)
- [Navigation.tsx:66-80](file://src/components/Navigation.tsx#L66-L80)
- [Footer.tsx:5](file://src/components/Footer.tsx#L5)
- [Footer.tsx:25](file://src/components/Footer.tsx#L25)
- [BentoSection.tsx:12](file://src/components/BentoSection.tsx#L12)
- [BentoSection.tsx:48](file://src/components/BentoSection.tsx#L48)
- [BentoSection.tsx:70-78](file://src/components/BentoSection.tsx#L70-L78)
- [index.css:72-78](file://src/index.css#L72-L78)
- [ImpactSection.tsx:13-26](file://src/components/ImpactSection.tsx#L13-L26)
- [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
- [ProjectsSection.tsx:70-76](file://src/components/ProjectsSection.tsx#L70-L76)
- [ContactSection.tsx:9-11](file://src/components/ContactSection.tsx#L9-L11)
- [ContactSection.tsx:20-34](file://src/components/ContactSection.tsx#L20-L34)
- [EducationSection.tsx:29](file://src/components/EducationSection.tsx#L29)

### Practical Examples of Common Patterns
- Surface containers: Use surface container utilities for elevated content areas with consistent borders and spacing.
  - Example: [BentoSection.tsx:12](file://src/components/BentoSection.tsx#L12), [ProjectsSection.tsx:25](file://src/components/ProjectsSection.tsx#L25)
- Hover elevation and translation: Apply transitions and shadows for interactive feedback.
  - Example: [index.css:76-78](file://src/index.css#L76-L78), [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
- Animated progress bars: Animate width on view to indicate proficiency or completion.
  - Example: [BentoSection.tsx:71-78](file://src/components/BentoSection.tsx#L71-L78)
- Label and badge typography: Use label font family and uppercase tracking for metadata.
  - Example: [Hero.tsx:22](file://src/components/Hero.tsx#L22), [ProjectsSection.tsx:70-76](file://src/components/ProjectsSection.tsx#L70-L76)

**Section sources**
- [BentoSection.tsx:12](file://src/components/BentoSection.tsx#L12)
- [ProjectsSection.tsx:25](file://src/components/ProjectsSection.tsx#L25)
- [index.css:76-78](file://src/index.css#L76-L78)
- [ProjectsSection.tsx:52](file://src/components/ProjectsSection.tsx#L52)
- [BentoSection.tsx:71-78](file://src/components/BentoSection.tsx#L71-L78)
- [Hero.tsx:22](file://src/components/Hero.tsx#L22)
- [ProjectsSection.tsx:70-76](file://src/components/ProjectsSection.tsx#L70-L76)

## Performance Optimizations

### Font Smoothing and Text Rendering
The system implements comprehensive font smoothing optimizations to ensure crisp text rendering across different platforms and operating systems:

- WebKit font smoothing: `-webkit-font-smoothing: antialiased` for macOS Safari and Chrome
- Mozilla font smoothing: `-moz-osx-font-smoothing: grayscale` for Firefox on macOS
- Text rendering optimization: `text-rendering: optimizeSpeed` for improved glyph rendering performance

These optimizations are applied globally to the body element to ensure consistent text quality throughout the application.

**Section sources**
- [index.css:49-51](file://src/index.css#L49-L51)

### Smooth Scrolling Behavior
Enhanced user experience through smooth scrolling behavior:

- Global smooth scrolling: `scroll-behavior: smooth` applied to the html element
- Improves navigation experience when users click on anchor links
- Reduces jarring page jumps during navigation

**Section sources**
- [index.css:54](file://src/index.css#L54)

### GPU Acceleration System
Comprehensive GPU acceleration for Framer Motion components ensures optimal animation performance:

#### Targeted CSS Selectors
The system automatically targets Framer Motion components and elements with transform/opacity properties:

- `[data-framer-component-type]`: Targets all Framer Motion components
- `[style*="transform"]`: Targets elements with transform styles
- `[style*="opacity"]`: Targets elements with opacity transitions

#### Hardware Acceleration Properties
Each targeted element receives performance-optimized CSS properties:

- `will-change: transform, opacity`: Informs the browser to prepare for transform and opacity changes
- `backface-visibility: hidden`: Prevents flickering during 3D transforms
- `-webkit-backface-visibility: hidden`: WebKit-specific backface visibility
- `transform-style: preserve-3d`: Ensures 3D positioning is maintained

#### Performance Benefits
- Enables hardware-accelerated compositing for smooth 60fps animations
- Reduces CPU usage by delegating animations to GPU
- Improves battery life on mobile devices
- Provides consistent performance across different hardware configurations

**Section sources**
- [index.css:58-66](file://src/index.css#L58-L66)

### Animation Optimization Patterns
Components leverage these performance optimizations through:

- Motion components: Automatic GPU acceleration for all Framer Motion animations
- Transform-based animations: Prefer transform properties over layout-affecting properties
- Opacity transitions: Smooth opacity changes benefit from GPU acceleration
- Spring animations: Hardware-accelerated spring physics for natural motion

**Section sources**
- [Hero.tsx:15-75](file://src/components/Hero.tsx#L15-L75)
- [Navigation.tsx:66-80](file://src/components/Navigation.tsx#L66-L80)
- [ImpactSection.tsx:132-167](file://src/components/ImpactSection.tsx#L132-L167)

## Dependency Analysis
Tailwind v4 is integrated via the Vite plugin, which scans the project for CSS and TypeScript files. The global stylesheet depends on Tailwind's utilities and theme tokens. Components depend on the global stylesheet and motion libraries for animations. The GPU acceleration system is automatically applied to all motion components.

```mermaid
graph LR
Pkg["package.json<br/>dependencies/devDependencies<br/>motion: ^12.23.24"] --> ViteCfg["vite.config.ts<br/>plugins: react, tailwindcss"]
ViteCfg --> CSS["src/index.css<br/>@theme, @layer base,<br/>GPU acceleration layer"]
CSS --> TW["Tailwind v4 Utilities<br/>Font smoothing & Performance"]
CSS --> Comp1["Hero.tsx<br/>motion/react"]
CSS --> Comp2["Navigation.tsx<br/>motion/react"]
CSS --> Comp3["Footer.tsx"]
CSS --> Comp4["BentoSection.tsx<br/>motion/react"]
CSS --> Comp5["ImpactSection.tsx<br/>motion/react"]
CSS --> Comp6["ProjectsSection.tsx<br/>motion/react"]
CSS --> Comp7["ContactSection.tsx"]
CSS --> Comp8["EducationSection.tsx"]
```

**Diagram sources**
- [package.json:13-33](file://package.json#L13-L33)
- [vite.config.ts:1-25](file://vite.config.ts#L1-L25)
- [index.css:1-87](file://src/index.css#L1-L87)
- [Hero.tsx:1-135](file://src/components/Hero.tsx#L1-L135)
- [Navigation.tsx:1-98](file://src/components/Navigation.tsx#L1-L98)
- [Footer.tsx:1-36](file://src/components/Footer.tsx#L1-L36)
- [BentoSection.tsx:1-87](file://src/components/BentoSection.tsx#L1-L87)
- [ImpactSection.tsx:1-542](file://src/components/ImpactSection.tsx#L1-L542)
- [ProjectsSection.tsx:1-100](file://src/components/ProjectsSection.tsx#L1-L100)
- [ContactSection.tsx:1-39](file://src/components/ContactSection.tsx#L1-L39)
- [EducationSection.tsx:1-58](file://src/components/EducationSection.tsx#L1-L58)

**Section sources**
- [package.json:13-33](file://package.json#L13-L33)
- [vite.config.ts:1-25](file://vite.config.ts#L1-L25)
- [index.css:1-87](file://src/index.css#L1-L87)

## Performance Considerations
- CSS delivery: Tailwind v4 produces a compact utility set; keep unused utilities out of the codebase to minimize CSS size.
- Browser compatibility: Tailwind v4 compiles modern CSS; ensure target browsers support essential features (backdrop-filter for glass effects, transforms for animations, will-change for GPU acceleration).
- Accessibility: Maintain sufficient contrast and readable line lengths; test with assistive technologies.
- Motion preferences: Respect reduced motion settings by simplifying transitions where appropriate.
- Font rendering: Font smoothing optimizations improve text quality across different platforms and operating systems.
- GPU acceleration: Hardware-accelerated animations provide smoother performance, especially on complex motion components.
- Smooth scrolling: Global smooth scrolling enhances navigation experience and reduces jarring page jumps.

**Updated** Added comprehensive performance optimization considerations including font smoothing, GPU acceleration, and smooth scrolling behavior.

## Troubleshooting Guide
- Theme tokens not applying: Verify @theme block order and that utilities reference defined tokens.
  - Reference: [index.css:3-40](file://src/index.css#L3-L40)
- Utilities not generated: Confirm Tailwind plugin is enabled in Vite and that files import the stylesheet.
  - Reference: [vite.config.ts:9](file://vite.config.ts#L9), [main.tsx:4](file://src/main.tsx#L4)
- Motion animations not rendering: Ensure the motion library is installed and imported in components.
  - Reference: [Hero.tsx:1](file://src/components/Hero.tsx#L1), [Navigation.tsx:2](file://src/components/Navigation.tsx#L2)
- GPU acceleration not working: Verify that motion components are properly structured and that the GPU acceleration CSS is loaded.
  - Reference: [index.css:58-66](file://src/index.css#L58-L66)
- Font smoothing issues: Check that font smoothing properties are applied to the correct elements and that browser support is adequate.
  - Reference: [index.css:49-51](file://src/index.css#L49-L51)
- Smooth scrolling not working: Ensure scroll-behavior property is applied to the html element.
  - Reference: [index.css:54](file://src/index.css#L54)
- Build errors: Check Tailwind and Vite versions for compatibility and reinstall dependencies if needed.
  - Reference: [package.json:25-33](file://package.json#L25-L33)

**Updated** Added troubleshooting guidance for new performance optimization features including GPU acceleration, font smoothing, and smooth scrolling.

**Section sources**
- [index.css:3-40](file://src/index.css#L3-L40)
- [vite.config.ts:9](file://vite.config.ts#L9)
- [main.tsx:4](file://src/main.tsx#L4)
- [Hero.tsx:1](file://src/components/Hero.tsx#L1)
- [Navigation.tsx:2](file://src/components/Navigation.tsx#L2)
- [package.json:25-33](file://package.json#L25-L33)
- [index.css:58-66](file://src/index.css#L58-L66)
- [index.css:49-51](file://src/index.css#L49-L51)
- [index.css:54](file://src/index.css#L54)

## Conclusion
This styling and theming system combines Tailwind CSS v4 with a custom tokenized palette, glass-morphism effects, and motion-driven interactions. The system now includes comprehensive performance optimizations including font smoothing properties, text-rendering optimizations, smooth scrolling behavior, and GPU acceleration for Framer Motion components. By centralizing theme tokens, leveraging responsive grids, applying consistent transitions, and implementing advanced performance optimizations, the design remains coherent across components while delivering exceptional user experience and performance. Extending the palette, adding dark mode, and optimizing for performance and accessibility can be achieved incrementally while preserving the established patterns and performance enhancements.

**Updated** Enhanced conclusion to reflect the comprehensive performance and rendering optimizations that have been implemented.

## Appendices
- Maintaining design consistency:
  - Use surface containers for content areas; reserve primary/secondary/tertiary for roles and states.
  - Keep typography scales consistent across breakpoints.
  - Implement font smoothing optimizations for improved text quality.
- Extending the color scheme:
  - Add semantic tokens and on-color pairs; derive container variants for depth.
- Adding custom animations:
  - Introduce motion-driven transitions for interactive states; tune durations and easing for clarity.
  - Leverage GPU acceleration for optimal animation performance.
- Optimizing for screen sizes:
  - Favor grid column spans and container-based layouts; test on mobile and tablet breakpoints.
  - Ensure smooth scrolling behavior across different device types.
- Accessibility and compatibility:
  - Validate contrast ratios; test with reduced-motion settings; confirm browser support for backdrop-filter and transforms.
  - Test font smoothing across different operating systems and browsers.
  - Verify GPU acceleration compatibility and fallback behavior.

**Updated** Added performance optimization considerations to the appendices, including font smoothing, GPU acceleration, and smooth scrolling best practices.