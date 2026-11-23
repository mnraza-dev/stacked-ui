import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders with default props and text content", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-slot", "button");
  });

  it("applies variant and size classes correctly", () => {
    const { rerender } = render(<Button variant="danger" size="lg">Delete</Button>);
    let button = screen.getByRole("button", { name: /delete/i });
    expect(button.className).toContain("bg-destructive");
    expect(button.className).toContain("h-10");

    rerender(<Button variant="outline" size="sm">Cancel</Button>);
    button = screen.getByRole("button", { name: /cancel/i });
    expect(button.className).toContain("border");
    expect(button.className).toContain("h-8");
  });

  it("handles loading state gracefully", () => {
    render(<Button isLoading>Submitting</Button>);
    const button = screen.getByRole("button", { name: /submitting/i });
    expect(button).toBeDisabled();
    expect(button.className).toContain("cursor-wait");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Action</Button>);
    const button = screen.getByRole("button", { name: /action/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly to the native button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
