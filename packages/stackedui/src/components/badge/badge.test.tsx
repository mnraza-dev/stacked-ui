import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Badge } from "./Badge";

describe("Badge Component", () => {
  it("renders with default variant and children", () => {
    render(<Badge>New Feature</Badge>);
    const badge = screen.getByText("New Feature");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("data-slot", "badge");
  });

  it("applies variant and size classes", () => {
    const { rerender } = render(<Badge variant="destructive" size="lg">Alert</Badge>);
    let badge = screen.getByText("Alert");
    expect(badge.className).toContain("bg-destructive");
    expect(badge.className).toContain("text-sm");

    rerender(<Badge variant="success" size="sm">Active</Badge>);
    badge = screen.getByText("Active");
    expect(badge.className).toContain("text-green-700");
  });
});
