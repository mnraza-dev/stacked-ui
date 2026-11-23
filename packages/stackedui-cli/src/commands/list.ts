import chalk from "chalk";

export const AVAILABLE_COMPONENTS: Record<string, { category: string; description: string; dependencies?: string[] }> = {
  // Basic
  button: { category: "Basic", description: "Interactive button with rich gradient and variant styles", dependencies: ["@radix-ui/react-slot"] },
  badge: { category: "Basic", description: "Status indicator badge with variant colors" },
  avatar: { category: "Basic", description: "Image avatar with fallback support", dependencies: ["@radix-ui/react-avatar"] },
  card: { category: "Basic", description: "Container card with header, title, description, content and footer" },
  separator: { category: "Basic", description: "Visual or semantic separator between content", dependencies: ["@radix-ui/react-separator"] },
  skeleton: { category: "Basic", description: "Placeholder loading skeleton animation" },
  spinner: { category: "Basic", description: "Accessible SVG loading spinner" },
  progress: { category: "Basic", description: "Linear progress bar indicator", dependencies: ["@radix-ui/react-progress"] },
  tooltip: { category: "Basic", description: "Popup displaying informative text on hover or focus", dependencies: ["@radix-ui/react-tooltip"] },

  // Forms
  input: { category: "Form", description: "Text input field with standard and glowing gradient variants" },
  textarea: { category: "Form", description: "Multi-line text input field" },
  label: { category: "Form", description: "Accessible form label primitive", dependencies: ["@radix-ui/react-label"] },
  checkbox: { category: "Form", description: "Form checkbox control", dependencies: ["@radix-ui/react-checkbox"] },
  "radio-group": { category: "Form", description: "Set of radio buttons where only one may be checked", dependencies: ["@radix-ui/react-radio-group"] },
  switch: { category: "Form", description: "Two-state toggle switch control", dependencies: ["@radix-ui/react-switch"] },
  select: { category: "Form", description: "Dropdown select control", dependencies: ["@radix-ui/react-select"] },
  "form-field": { category: "Form", description: "Composite field with label, description, and validation errors" },

  // Navigation
  tabs: { category: "Navigation", description: "Set of layered sections of content", dependencies: ["@radix-ui/react-tabs"] },
  breadcrumb: { category: "Navigation", description: "Navigation hierarchy breadcrumb list" },
  pagination: { category: "Navigation", description: "Page navigation controls with previous/next triggers" },
  "dropdown-menu": { category: "Navigation", description: "Dropdown action menu", dependencies: ["@radix-ui/react-dropdown-menu"] },

  // Overlays
  dialog: { category: "Overlay", description: "Modal dialog window overlay", dependencies: ["@radix-ui/react-dialog"] },
  "alert-dialog": { category: "Overlay", description: "Confirmation dialog requiring explicit action", dependencies: ["@radix-ui/react-alert-dialog"] },
  drawer: { category: "Overlay", description: "Slide-over drawer panel" },
  popover: { category: "Overlay", description: "Rich content popover triggered by button", dependencies: ["@radix-ui/react-popover"] },
  "hover-card": { category: "Overlay", description: "Hover-activated preview card", dependencies: ["@radix-ui/react-hover-card"] },

  // Feedback
  alert: { category: "Feedback", description: "Informational callout box with icon and description" },
  "empty-state": { category: "Feedback", description: "Placeholder for empty lists, search, or initial states" },

  // Data Display
  accordion: { category: "Data Display", description: "Collapsible vertical sections", dependencies: ["@radix-ui/react-accordion"] },
  table: { category: "Data Display", description: "Responsive structured table components" },
  collapsible: { category: "Data Display", description: "Expand and collapse interactive content", dependencies: ["@radix-ui/react-collapsible"] },
  "stat-card": { category: "Data Display", description: "Metric card displaying KPIs, values, and trends" },
  timeline: { category: "Data Display", description: "Chronological event timeline component" },
  carousel: { category: "Data Display", description: "Embla-powered interactive motion carousel", dependencies: ["embla-carousel-react"] },

  // Layout
  layout: { category: "Layout", description: "Responsive layout primitives (Container, Stack, Grid, Flex, Section)" },
  "aspect-ratio": { category: "Layout", description: "Responsive aspect ratio container", dependencies: ["@radix-ui/react-aspect-ratio"] },
};

export async function listCommand(args: string[]) {
  console.log(chalk.bold.hex("#6366f1")("\n📦 Stacked UI Component Catalog\n"));

  const categories = Array.from(new Set(Object.values(AVAILABLE_COMPONENTS).map((c) => c.category)));

  for (const cat of categories) {
    console.log(chalk.bold.underline(`${cat} Components:`));
    const items = Object.entries(AVAILABLE_COMPONENTS).filter(([_, info]) => info.category === cat);
    for (const [name, info] of items) {
      console.log(`  ${chalk.cyan(name.padEnd(16))} ${chalk.dim(info.description)}`);
    }
    console.log("");
  }

  console.log(`To install a component, run: ${chalk.green("npx stackedui-cli add <name>")}\n`);
}
