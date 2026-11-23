import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Switch } from "./Switch";

describe("Switch Component", () => {
  it("renders switch and toggles state on click", () => {
    const handleCheckedChange = vi.fn();
    render(<Switch onCheckedChange={handleCheckedChange} aria-label="Toggle setting" />);

    const switchEl = screen.getByRole("switch", { name: /toggle setting/i });
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(switchEl);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it("handles disabled state", () => {
    render(<Switch disabled aria-label="Disabled switch" />);
    const switchEl = screen.getByRole("switch");
    expect(switchEl).toBeDisabled();
  });
});
