import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

describe("Alert Component", () => {
  it("renders alert with title and description", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Critical Error</AlertTitle>
        <AlertDescription>System malfunction detected.</AlertDescription>
      </Alert>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Critical Error")).toBeInTheDocument();
    expect(screen.getByText("System malfunction detected.")).toBeInTheDocument();
  });
});
