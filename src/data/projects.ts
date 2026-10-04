import type { Project } from "../types/content";

const projects = [
  {
    id: "messfit",
    title: "MessFit",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "Constraint-based plate optimizer + fitness companion for Indian hostel students. Pick what to eat from what your mess actually serves — given your calorie / macro targets, allergens, conditions, and today's menu — then log it, track progress, train, and ask a grounded AI coach. Built for Amrita Coimbatore hostelers, where you can't choose your ingredients — so generic fitness apps don't fit. Features a Mifflin-St Jeor goal engine, MILP plate optimizer (PuLP/CBC), per-hostel mess menus with photo OCR, hostel-friendly workouts, logging with adherence and streaks, and a RAG AI coach (Gemini + pgvector) with citations to /learn.",
    frameworks: ["Python", "PuLP", "PostgreSQL", "Gemini"],
    tags: ["Optimization", "RAG", "FitnessTech", "pgvector", "OpenTelemetry"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      instagram: {
        type: "web",
        url: "https://www.instagram.com/idea_amrita/",
      },
    },
  },
  {
    id: "nodeshare",
    title: "NodeShare",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "NodeShare lets two computers — anywhere in the world — connect directly and securely, so one machine can run a piece of work (a task) on the other. Start NodeShare on a machine with spare power (the Provider), share a single command with a friend, and they connect as the Requester for an interactive terminal to ping, inspect hardware with sysinfo, send code with create-task, and run it remotely inside Docker with live output via run-task. No port forwarding, no accounts, no cloud — works across home networks out of the box.",
    frameworks: ["Node.js", "Docker", "TypeScript"],
    tags: ["P2PNetworking", "RemoteExecution", "Docker", "CLI"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      instagram: {
        type: "web",
        url: "https://www.instagram.com/idea_amrita/",
      },
    },
  },
  {
    id: "paystable",
    title: "Paystable",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "A payment state stabilizer for teams that cannot afford to trust one webhook too early. Paystable is a small open-source Go service that sits after checkout and before fulfillment. It does not replace your gateway, route payments, vault cards, or compete with orchestrators — you keep using PayU today. It gives your app a safer state machine around webhooks, gateway lag, conflicting signals, retries, and audit trails, with one core rule: never take an irreversible action on one unverified payment signal.",
    frameworks: ["Go", "PostgreSQL", "Docker"],
    tags: ["Payments", "Webhooks", "StateMachine", "BackendDevelopment"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      instagram: {
        type: "web",
        url: "https://www.instagram.com/idea_amrita/",
      },
    },
  },
] as const satisfies readonly [Project, ...Project[]];

export type ProjectId = (typeof projects)[number]["id"];

export default projects;
