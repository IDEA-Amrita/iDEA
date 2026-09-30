import { describe, expect, it } from "vitest";
import { renderWithProviders, screen } from "../../../test/render";
import MemberCard from "./MemberCard";

describe("Member card", () => {
  it("distinguishes pending positions from filled member profiles", () => {
    const { container, rerender } = renderWithProviders(
      <MemberCard
        revealState="visible"
        member={{
          id: "mentor",
          status: "pending",
          name: "Name to be announced",
          designation: "Faculty Mentor",
        }}
      />,
    );
    expect(screen.getByText("To be announced")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
    rerender(
      <MemberCard
        revealState="visible"
        member={{
          id: "mentor",
          status: "filled",
          name: "Example Mentor",
          designation: "Faculty Mentor",
          photo: "/images/mentor.webp",
        }}
      />,
    );
    expect(screen.queryByText("To be announced")).toBeNull();
    expect(screen.getByText("Example Mentor")).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      "/images/mentor.webp",
    );
  });
});
