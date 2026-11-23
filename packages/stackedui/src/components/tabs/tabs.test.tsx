import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

describe("Tabs Component", () => {
  it("renders tabs and displays selected tab content", () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account settings panel</TabsContent>
        <TabsContent value="password">Password change panel</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole("tab", { name: /account/i })).toBeInTheDocument();
    expect(screen.getByText("Account settings panel")).toBeInTheDocument();
  });
});
