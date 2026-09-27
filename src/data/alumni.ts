import type { AlumniMember } from "../types/content";

export const alumniBatches: readonly string[] = ["2025-26"];

export type AlumniBatch = string;

export const alumniData: Record<AlumniBatch, readonly AlumniMember[]> = {
  "2025-26": [
    {
      id: "alumni-25-kavinesh",
      name: "Kavinesh Parthasarthi",
      role: "President",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Kavinesh Parthasarthi President.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-barinidharan",
      name: "Barinidharan Selvaraj",
      role: "Vice President - Dev Relations",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI(
        "/team/2025-26/Barinidharan Selvaraj Vice President Dev Relations.jpeg",
      ),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-pongopika",
      name: "Pon Gopika",
      role: "Vice President - Corporate Relations",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI(
        "/team/2025-26/Pon Gopika Vice President Corporate Relations.jpeg",
      ),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-sainivedh",
      name: "Sai Nivedh",
      role: "Tech Lead",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Sai Nivedh Tech Lead.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-srikrishna",
      name: "Sri Krishna Vundavalli",
      role: "AI Lead",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Sri Krishna Vundavalli AI Lead.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-roshan",
      name: "Roshan T",
      role: "Webmaster",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Roshan T Webmaster.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-sudharshan",
      name: "Sudharshan",
      role: "Webmaster",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Sudharshan Webmaster.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-swetha",
      name: "Swetha",
      role: "Webmaster",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Swetha Webmaster.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "alumni-25-mokitha",
      name: "Mokitha Sakthi",
      role: "Secretary",
      batch: "2025-26",
      status: "filled",
      photo: encodeURI("/team/2025-26/Mokitha Sakthi Secretary.jpeg"),
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ],
};
