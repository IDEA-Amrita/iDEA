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

  it("places social links in the footer beside the role, like alumni cards", () => {
    const { container } = renderWithProviders(
      <MemberCard
        revealState="visible"
        member={{
          id: "member",
          status: "filled",
          name: "Example Member",
          designation: "Tech Lead",
          photo: "/images/member.webp",
          linkedin: "https://linkedin.com/in/example",
          github: "https://github.com/example",
        }}
      />,
    );
    const linkedin = screen.getByRole("link", {
      name: "Example Member's LinkedIn",
    });
    const github = screen.getByRole("link", {
      name: "Example Member's GitHub",
    });
    expect(linkedin).toHaveAttribute("href", "https://linkedin.com/in/example");
    expect(github).toHaveAttribute("href", "https://github.com/example");
    expect(linkedin.parentElement).toBe(github.parentElement);
    expect(linkedin.closest("div")?.parentElement).toContainElement(
      screen.getByText("Tech Lead"),
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      "/images/member.webp",
    );
  });
});
