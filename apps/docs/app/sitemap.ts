import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stacked-ui.vercel.app";

  const components = [
    "button", "badge", "avatar", "card", "separator", "skeleton",
    "spinner", "progress", "tooltip", "input", "textarea", "label",
    "checkbox", "radio-group", "switch", "select", "form-field",
    "tabs", "breadcrumb", "pagination", "dropdown-menu", "dialog",
    "alert-dialog", "drawer", "popover", "hover-card", "alert",
    "empty-state", "table", "accordion", "collapsible", "stat-card",
    "timeline", "carousel", "layout", "aspect-ratio",
  ];

  const docRoutes = [
    "",
    "/docs/introduction",
    "/docs/installation",
    "/docs/theming",
    "/docs/cli",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...docRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...components.map((c) => ({
      url: `${baseUrl}/components/${c}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}
