import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Progress } from "./Progress";

describe("Progress Component", () => {
  it("renders with value and aria attributes", () => {
    render(<Progress value={65} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("data-slot", "progress");
  });
});
