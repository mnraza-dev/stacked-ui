import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component", () => {
  it("renders checkbox and triggers change event", () => {
    const handleCheckedChange = vi.fn();
    render(<Checkbox onCheckedChange={handleCheckedChange} aria-label="Accept terms" />);

    const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
