# Changelog

All notable changes to the Stacked UI project are documented here.

## [0.1.0] - 2026-11-23

### Core Library (`stackedui`)
- **Foundation:** Upgraded to React 19 and configured `peerDependencies` (`react: ^18.0.0 || ^19.0.0`) to avoid duplicate React instance issues.
- **Dual Package Exports:** Added full ESM export maps with type declarations (`dist/index.d.ts`) and CSS distribution (`dist/index.css`).
- **Client Directives:** Configured `"use client";` bundle banner for seamless Next.js Server/Client component interoperability.
- **Design Tokens:** Aligned OKLCH color scale across light and dark themes with WCAG AA compliance.
- **Component Expansion:** Implemented 30+ accessible components spanning Basic, Form, Navigation, Overlay, Feedback, Data Display, and Layout categories.
- **Testing:** Configured Vitest test suite with 21 unit tests validating rendering, variants, keyboard interactions, and ref forwarding.

### CLI Tool (`stackedui-cli`)
- **Module System:** Converted to pure NodeNext ESM with Chalk v5.
- **Commands:** Implemented `init`, `add`, `list`, and `remove` commands with `--skip-install` support.

### Documentation (`docs`)
- **Next.js 15 Integration:** Ported to Next.js App Router with 47 pre-rendered static routes.
- **Interactive Previews:** Added live interactive component demos for all components and a real-time Button playground.
- **SEO & Search:** Added `sitemap.xml`, `robots.txt`, and client-side documentation filtering.
