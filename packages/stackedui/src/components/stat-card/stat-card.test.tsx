import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { StatCard } from "./StatCard";

describe("StatCard Component", () => {
  it("renders title, value and trend percentage", () => {
    render(
      <StatCard
        title="Weekly Active Users"
        value="12,500"
        change={15.4}
        changePeriod="vs last week"
      />
    );

    expect(screen.getByText("Weekly Active Users")).toBeInTheDocument();
    expect(screen.getByText("12,500")).toBeInTheDocument();
    expect(screen.getByText("15.4%")).toBeInTheDocument();
    expect(screen.getByText("vs last week")).toBeInTheDocument();
  });
});
