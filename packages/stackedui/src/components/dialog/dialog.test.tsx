import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./Dialog";

describe("Dialog Component", () => {
  it("opens dialog on trigger click and displays content", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>Modal Description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByRole("button", { name: /open modal/i });
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });
});
