import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, waitFor } from "../test/render";
import DummyForm from "./DummyForm";

describe("DummyForm", () => {
  it("renders relevant project proposal fields", () => {
    renderWithProviders(
      <DummyForm formId="Csq4ijcx" label="Propose a project" />,
    );
    expect(screen.getByLabelText(/Project Lead Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/The Problem Statement/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Proposed Solution & Architecture/i),
    ).toBeInTheDocument();
  });

  it("renders relevant project application fields with prefilled title", () => {
    renderWithProviders(
      <DummyForm
        formId="BEDaiz9s"
        label="Join Scheduler"
        hidden={{ project: "Scheduler", project_id: "sched" }}
      />,
    );
    expect(screen.getByLabelText(/Applying for Project/i)).toHaveValue(
      "Scheduler",
    );
    expect(screen.getByLabelText(/Role Applying For/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Relevant Experience & Skills/i),
    ).toBeInTheDocument();
  });

  it("submits the form and displays confirmation message", async () => {
    const onSubmitSuccess = vi.fn();
    const { user } = renderWithProviders(
      <DummyForm
        formId="Csq4ijcx"
        label="Propose a project"
        onSubmitSuccess={onSubmitSuccess}
      />,
    );

    await user.type(
      screen.getByLabelText(/Project Lead Name/i),
      "Arjun Sreedhar",
    );
    await user.type(
      screen.getByLabelText(/College Email/i),
      "arjun@cb.amrita.edu",
    );
    await user.type(
      screen.getByLabelText(/Working Project Title/i),
      "Campus Rover",
    );
    await user.type(
      screen.getByLabelText(/The Problem Statement/i),
      "Need autonomous mail delivery.",
    );
    await user.type(
      screen.getByLabelText(/Proposed Solution & Architecture/i),
      "Build an autonomous rover using ROS2 and LiDAR.",
    );

    await user.click(
      screen.getByRole("button", { name: /Submit Application/i }),
    );

    await waitFor(() =>
      expect(screen.getByText(/Submission Received!/i)).toBeInTheDocument(),
    );
    expect(onSubmitSuccess).toHaveBeenCalledWith(
      expect.objectContaining({ formId: "Csq4ijcx" }),
    );
  });
});
