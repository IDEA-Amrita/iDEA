import type { FacultyMember } from "../types/content";

const faculty = [
  {
    id: "faculty-mentor",
    status: "filled",
    name: "Vedaj J. Padman",
    designation: "Faculty Mentor",
    photo: "/faculty/vedaj_sir.webp",
  },
] as const satisfies readonly FacultyMember[];

export default faculty;
