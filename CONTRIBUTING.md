# Contributing to Stacked UI

First off, thank you for considering contributing to **Stacked UI**! It is contributors like you that make open source such a fantastic environment for developers worldwide.

Please take a moment to review this document to understand our development workflows, coding standards, and pull request procedures.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Monorepo Structure](#monorepo-structure)
5. [Component Architecture Standards](#component-architecture-standards)
6. [Testing Standards](#testing-standards)
7. [Documentation Requirements](#documentation-requirements)
8. [Commit Message Conventions](#commit-message-conventions)
9. [Submitting a Pull Request](#submitting-a-pull-request)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md) at all times.

---

## Prerequisites

- **Node.js:** v20.0.0 or higher (v22+ recommended)
- **pnpm:** v9.0.0 or higher (`corepack enable pnpm`)
- **Git:** Latest version

---

## Local Development Setup

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/stacked-ui.git
   cd stacked-ui
   ```

2. **Install Workspace Dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the Documentation & Playground Server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify the Build & Test Suite:**
   ```bash
   pnpm test        # Runs all Vitest test suites
   pnpm typecheck   # Type-checks all workspaces
   pnpm build       # Builds the library, CLI, and docs
   ```

---

## Monorepo Structure

```text
stacked-ui/
├── packages/
│   ├── stackedui/          # Core React component library (Vite + Tailwind v4 + Radix)
│   └── stackedui-cli/      # Scaffolding CLI tool (NodeNext ESM)
└── apps/
    └── docs/               # Next.js 15 App Router documentation website
```

---

## Component Architecture Standards

When authoring or modifying components in `packages/stackedui/src/components/`, follow these strict guidelines:

1. **Primitives First:** Leverage Radix UI primitives for all stateful or interactive overlays, menus, inputs, and disclosures to guarantee keyboard navigation and screen reader accessibility.
2. **CVA Styling:** Use `class-variance-authority` (`cva`) for declaring variant and size configurations.
3. **Ref Forwarding:** Always use `React.forwardRef` and ensure the `ref` is forwarded to the underlying DOM element or Radix primitive.
4. **Data Slot:** Add `data-slot="component-name"` to the root and key subcomponents for predictable DOM targeting and styling.
5. **No Dynamic Class Construction:** Never interpolate dynamic strings into Tailwind class names (e.g., Avoid ``from-${color}-500``). Use CSS custom properties or inline styles with fallbacks instead.
6. **Barrel Exports:** Every component folder must contain an `index.ts` file that re-exports its public API, and must be registered in `packages/stackedui/src/index.ts`.

---

## Testing Standards

Every component must include a test suite (`<component>.test.tsx`) alongside its source code:

- **Rendering:** Verify default prop rendering and children display.
- **Variants:** Validate that variant and size classes are correctly appended.
- **Interactions:** Test click events, change triggers, and keyboard shortcuts.
- **State:** Test both controlled and uncontrolled behavior where applicable.
- **Accessibility:** Assert ARIA roles (`role="dialog"`, `aria-label`, `data-state`).

Run the test suite:
```bash
pnpm test
```

---

## Documentation Requirements

When adding a new component or variant:

1. Create a documentation page in `apps/docs/app/components/<component-name>/page.tsx`.
2. Add the component to `apps/docs/app/_components/Sidebar.tsx` under the appropriate category.
3. Register the component in `apps/docs/app/sitemap.ts` for SEO indexation.
4. Register the component in `packages/stackedui-cli/src/commands/list.ts` so the CLI can discover and scaffold it.

---

## Commit Message Conventions

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat(<scope>):` A new feature or component (e.g. `feat(dialog): add size variants`)
- `fix(<scope>):` A bug fix (e.g. `fix(button): prevent click propagation when loading`)
- `docs(<scope>):` Documentation changes (e.g. `docs(theming): add OKLCH guide`)
- `refactor(<scope>):` Code changes that neither fix a bug nor add a feature
- `test(<scope>):` Adding or correcting tests
- `chore(<scope>):` Maintenance tasks, dependency bumps, or tooling changes

---

## Submitting a Pull Request

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/my-new-component
   ```
2. Commit your changes following our conventions.
3. Run all verification checks locally:
   ```bash
   pnpm test && pnpm typecheck && pnpm build
   ```
4. Push to your fork:
   ```bash
   git push origin feat/my-new-component
   ```
5. Open a Pull Request on GitHub targeting `main`. Provide a clear summary of the change, test coverage details, and screenshots if UI changes were made.
