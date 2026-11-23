import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Accordion Component", () => {
  it("renders accordion and expands section on trigger click", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Section 1 Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole("button", { name: /section 1/i });
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("data-state", "open");
  });
});
