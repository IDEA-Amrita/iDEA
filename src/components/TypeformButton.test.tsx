import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders, screen, waitFor } from "../test/render";
import TypeformButton from "./TypeformButton";

const { createWidget, unmountWidget } = vi.hoisted(() => ({
  createWidget: vi.fn(),
  unmountWidget: vi.fn(),
}));
vi.mock("../utils/loadTypeform", () => ({ createWidget }));
vi.mock("../config/forms", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../config/forms")>();
  return {
    ...actual,
    USE_DUMMY_FORMS: false,
  };
});
beforeEach(() => {
  createWidget.mockReset().mockReturnValue({ unmount: unmountWidget });
  unmountWidget.mockClear();
});
describe("form resilience", () => {
  it("loads only on interaction and restores focus after closing", async () => {
    const { user } = renderWithProviders(
      <TypeformButton formId="Csq4ijcx" label="Propose a project">
        lessgo
      </TypeformButton>,
    );
    expect(createWidget).not.toHaveBeenCalled();
    const trigger = screen.getByRole("button", { name: "Propose a project" });
    await user.click(trigger);
    await waitFor(() => expect(createWidget).toHaveBeenCalledOnce());
    expect(
      screen.getByRole("dialog", { name: "Propose a project" }),
    ).toBeVisible();
    await user.click(
      screen.getByRole("button", { name: "Close Propose a project form" }),
    );
    expect(trigger).toHaveFocus();
    expect(unmountWidget).toHaveBeenCalledOnce();
  });
  it("offers the correct direct link when embedding fails", async () => {
    createWidget.mockImplementation(() => {
      throw new Error("failed");
    });
    const { user } = renderWithProviders(
      <TypeformButton formId="KS9VXRHf" label="Join iDEA">
        Join
      </TypeformButton>,
    );
    await user.click(screen.getByRole("button", { name: "Join iDEA" }));
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("could not load"),
    );
    expect(
      screen.getByRole("link", { name: /Open Join iDEA form directly/ }),
    ).toHaveAttribute("href", "https://form.typeform.com/to/KS9VXRHf");
  });
  it("passes hidden fields to embed and encodes them in direct link", async () => {
    const { user } = renderWithProviders(
      <TypeformButton
        formId="BEDaiz9s"
        label="Join Scheduler"
        hidden={{ project: "Scheduler", project_id: "sched" }}
      >
        Join
      </TypeformButton>,
    );
    await user.click(screen.getByRole("button", { name: "Join Scheduler" }));
    await waitFor(() => expect(createWidget).toHaveBeenCalledOnce());
    expect(createWidget).toHaveBeenCalledWith(
      "BEDaiz9s",
      expect.objectContaining({
        hidden: { project: "Scheduler", project_id: "sched" },
      }),
    );
    expect(
      screen.getByRole("link", { name: /Open Join Scheduler form directly/ }),
    ).toHaveAttribute(
      "href",
      "https://form.typeform.com/to/BEDaiz9s#project=Scheduler&project_id=sched",
    );
  });
  it("handles form submission lifecycle and duplicate detection", async () => {
    let capturedOptions:
      | {
          onSubmit: (_data: { formId: string; responseId: string }) => void;
          onDuplicateDetected: (_data: { formId: string }) => void;
        }
      | undefined;
    createWidget.mockImplementation((id, options) => {
      capturedOptions = options;
      return { unmount: unmountWidget };
    });
    const onSubmit = vi.fn();
    const { user } = renderWithProviders(
      <TypeformButton
        formId="Csq4ijcx"
        label="Propose a project"
        onSubmit={onSubmit}
      >
        Propose
      </TypeformButton>,
    );
    await user.click(screen.getByRole("button", { name: "Propose a project" }));
    await waitFor(() => expect(createWidget).toHaveBeenCalledOnce());

    capturedOptions?.onSubmit({ formId: "Csq4ijcx", responseId: "resp_123" });
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Thank you! Your response has been submitted.",
      ),
    );
    expect(onSubmit).toHaveBeenCalledWith({
      formId: "Csq4ijcx",
      responseId: "resp_123",
    });

    capturedOptions?.onDuplicateDetected({ formId: "Csq4ijcx" });
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "You have already submitted this form.",
      ),
    );
  });
  it("dismisses the dialog when clicking the backdrop", async () => {
    const { user } = renderWithProviders(
      <TypeformButton formId="Csq4ijcx" label="Propose a project">
        Propose
      </TypeformButton>,
    );
    const trigger = screen.getByRole("button", { name: "Propose a project" });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Propose a project" });
    expect(dialog).toBeVisible();

    fireEvent.click(dialog);
    expect(dialog).not.toBeVisible();
    expect(trigger).toHaveFocus();
  });
});
