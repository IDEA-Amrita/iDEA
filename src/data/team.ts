import type { TeamGroup } from "../types/content";

export const teamGroups = [
  {
    id: "president",
    label: "PRESIDENT",
    columns: 1,
    members: [
      {
        id: "president-1",
        status: "filled",
        name: "Nitansh Shankar",
        designation: "President",
        photo: "/team/2026-27/Nitansh-President.jpeg",
        linkedin: "https://www.linkedin.com/in/shankarnitansh/",
        github: "https://github.com/BIJJUDAMA",
      },
    ],
  },
  {
    id: "vice-president",
    label: "VICE PRESIDENTS",
    columns: 2,
    members: [
      {
        id: "vice-president-1",
        status: "filled",
        name: "Mahakishore M",
        designation: "Vice President(Operations)",
        photo: "/team/2026-27/Mahakishore-VP.jpeg",
        linkedin: "https://www.linkedin.com/in/mahakisore7",
        github: "https://github.com/Mahakisore7",
      },
      {
        id: "vice-president-2",
        status: "filled",
        name: "Minoti K",
        designation: "Vice President(Corporate Relations)",
        photo: "/team/2026-27/Minoti-VP.jpeg",
        linkedin: "https://www.linkedin.com/in/minoti-gupta",
        github: "https://github.com/MinotiGupta",
      },
    ],
  },
  {
    id: "technology",
    label: "TECH LEAD, R&D HEAD & WEBMASTERS",
    columns: 4,
    members: [
      {
        id: "tech-lead-1",
        status: "filled",
        name: "Aniruth Karthik",
        designation: "Tech Lead",
        photo: "/team/2026-27/Aniruth-TechLead.jpeg",
        linkedin: "https://www.linkedin.com/in/aniruthkarthik/",
        github: "https://github.com/AniruthKarthik",
      },
      {
        id: "research-development-1",
        status: "filled",
        name: "Ketaki Athalekar",
        designation: "R&D Head",
        photo: "/team/2026-27/Ketaki-ResearchLead.jpeg",
        linkedin: "https://www.linkedin.com/in/ketaki-athalekar-631b26287/",
        github: "https://github.com/kekzki",
      },
      {
        id: "web-master-1",
        status: "filled",
        name: "Dharshan",
        designation: "Web Master",
        photo: "/team/2026-27/Dharshan-Webmaster.png",
        linkedin: "https://www.linkedin.com/in/Dharshan2208",
        github: "https://github.com/Dharshan2208",
      },
      {
        id: "web-master-2",
        status: "filled",
        name: "Shruhath Reddy",
        designation: "Web Master",
        photo: "/team/2026-27/Shruhath-Webmaster.jpeg",
      },
    ],
  },
  {
    id: "administration",
    label: "SECRETARY, JOINT SECRETARY, TREASURER & MULTIMEDIA HEAD",
    columns: 3,
    members: [
      {
        id: "secretary-1",
        status: "filled",
        name: "Kamalini Vaithyanathan",
        designation: "Secretary",
        photo: "/team/2026-27/Kamalini-Secretary.jpeg",
        linkedin:
          "https://www.linkedin.com/in/kamalini-vaithyanathan-55bb53375/",
        github: "https://github.com/Kamalini29",
      },
      {
        id: "joint-secretary-1",
        status: "filled",
        name: "R Nethra",
        designation: "Joint Secretary",
        photo: "/team/2026-27/Nethra-JS.jpeg",
        linkedin: "https://www.linkedin.com/in/nethra-rajendran-83036330a/",
        github: "https://github.com/Nethra-R368",
      },
      {
        id: "treasurer-1",
        status: "filled",
        name: "A R Nirmal",
        designation: "Treasurer",
        photo: "/team/2026-27/Nirmal-Treasurer.jpeg",
      },
      {
        id: "multimedia-1",
        status: "filled",
        name: "Hrithik",
        designation: "Multimedia Head",
        photo: "/team/2026-27/Hrithik-MultimediaHead.jpeg",
      },
    ],
  },
] as const satisfies readonly TeamGroup[];

export type TeamGroupId = (typeof teamGroups)[number]["id"];
