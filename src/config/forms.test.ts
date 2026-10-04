import { describe, expect, it } from "vitest";
import { formIds, getTypeformUrl, TYPEFORM_BASE_URL } from "./forms";

describe("forms configuration", () => {
  it("defines form IDs for community actions", () => {
    expect(formIds.proposeProject).toBe(
      import.meta.env.VITE_TYPEFORM_PROPOSE_PROJECT || "Csq4ijcx",
    );
    expect(formIds.joinCommunity).toBe(
      import.meta.env.VITE_TYPEFORM_JOIN_COMMUNITY || "KS9VXRHf",
    );
    expect(formIds.joinProject).toBe(
      import.meta.env.VITE_TYPEFORM_JOIN_PROJECT || "BEDaiz9s",
    );
  });

  it("builds the correct base Typeform URL without hidden fields", () => {
    expect(getTypeformUrl("testForm")).toBe(`${TYPEFORM_BASE_URL}/testForm`);
    expect(getTypeformUrl("testForm", {})).toBe(
      `${TYPEFORM_BASE_URL}/testForm`,
    );
  });

  it("builds Typeform URL with encoded hidden hash parameters", () => {
    const url = getTypeformUrl("testForm", {
      project: "Scheduler",
      source: "web",
    });
    expect(url).toBe(
      `${TYPEFORM_BASE_URL}/testForm#project=Scheduler&source=web`,
    );
  });
});
