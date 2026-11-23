import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "./Avatar";

describe("Avatar Component", () => {
  it("renders avatar with fallback text", () => {
    render(
      <Avatar>
        <AvatarImage src="/broken.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders avatar group with excess indicator", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
      </AvatarGroup>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
  });
});
