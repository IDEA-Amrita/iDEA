import axe from "axe-core";
import { describe, expect, it } from "vitest";
import { renderWithProviders, screen, within } from "../test/render";
import { socialLinks } from "../config/socialLinks";
import { clubContact } from "../config/clubContact";
import Footer from "./Footer";

describe("Footer", () => {
  it("provides social links in a footer landmark", async () => {
    const { container } = renderWithProviders(<Footer />);
    const footer = screen.getByRole("contentinfo");
    for (const { label, href } of socialLinks) {
      expect(within(footer).getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
    expect(
      footer.querySelectorAll(`a[href="mailto:${clubContact.email}"]`),
    ).toHaveLength(1);
    expect(
      within(footer).getByRole("link", { name: "iDEA on LinkedIn" }),
    ).toHaveAttribute("href", clubContact.linkedin);
    expect(footer).toHaveTextContent(`© ${new Date().getFullYear()} iDEA`);
    expect((await axe.run(container)).violations).toEqual([]);
  });
  it("displays campus details and only renders a phone link when supplied", () => {
    const { rerender } = renderWithProviders(<Footer />);
    expect(
      screen.getByText(new RegExp(clubContact.location)),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email iDEA" })).toHaveAttribute(
      "href",
      `mailto:${clubContact.email}`,
    );
    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
    rerender(
      <Footer contact={{ ...clubContact, phone: "+1 (202) 555-0100" }} />,
    );
    expect(
      screen.getByRole("link", { name: "+1 (202) 555-0100" }),
    ).toHaveAttribute("href", "tel:+12025550100");
  });
});
