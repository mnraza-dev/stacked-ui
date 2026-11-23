import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders text input with placeholder", () => {
    render(<Input placeholder="Enter username" />);
    const input = screen.getByPlaceholderText("Enter username");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("forwards ref to native input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} defaultValue="Test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.value).toBe("Test");
  });

  it("applies glowing variant styles", () => {
    render(<Input variant="glowing" placeholder="Glowing" />);
    const input = screen.getByPlaceholderText("Glowing");
    expect(input.className).toContain("from-indigo-600/10");
  });
});
