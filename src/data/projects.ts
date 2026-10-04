import type { Project } from "../types/content";

const projects = [
  {
    id: "messfit",
    title: "MessFit",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "A constraint-based nutrition optimizer and fitness companion designed for university hostel residents. MessFit calculates optimal meal selections based on daily mess menus, individual caloric and macronutrient targets, dietary restrictions, and health goals. Built specifically for students who cannot customize raw ingredients, the platform features a Mifflin-St Jeor target engine, mixed-integer linear programming meal optimizer, automated mess menu OCR, tailored hostel workouts, habit tracking, and a retrieval-augmented AI fitness advisor.",
    frameworks: ["Python", "PuLP", "PostgreSQL", "Gemini"],
    tags: ["Optimization", "RAG", "FitnessTech", "pgvector", "OpenTelemetry"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      github: {
        type: "web",
        url: "https://github.com/IDEA-Amrita/Mess-Fit",
      },
    },
  },
  {
    id: "nodeshare",
    title: "NodeShare",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "A lightweight peer-to-peer compute sharing system that enables secure, direct machine-to-machine task execution. NodeShare allows a provider machine with available computational capacity to execute tasks requested by a client through an interactive terminal interface. It supports remote hardware telemetry, task dispatching, and containerized Docker execution with real-time stream output, requiring zero port forwarding, accounts, or cloud intermediaries.",
    frameworks: ["Node.js", "Docker", "TypeScript"],
    tags: ["P2PNetworking", "RemoteExecution", "Docker", "CLI"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      github: {
        type: "web",
        url: "https://github.com/IDEA-Amrita/NodeShare",
      },
    },
  },
  {
    id: "paystable",
    title: "Paystable",
    lead: { name: "iDEA", yearAndDepartment: "CSE" },
    timeline: { started: "2026-06", status: "ongoing" },
    description:
      "A resilient payment state machine and verification service designed to ensure reliable transaction fulfillment. Written in Go, Paystable operates between payment checkout and order fulfillment to reconcile asynchronous gateway webhooks, handle network latency, resolve conflicting status signals, and maintain immutable audit trails. It prevents premature or duplicate order fulfillment by enforcing verified state transitions across payment lifecycles.",
    frameworks: ["Go", "PostgreSQL", "Docker"],
    tags: ["Payments", "Webhooks", "StateMachine", "BackendDevelopment"],
    contacts: {
      email: { type: "email", address: "ideatech@cb.amrita.edu" },
      github: {
        type: "web",
        url: "https://github.com/IDEA-Amrita/paystable",
      },
    },
  },
] as const satisfies readonly [Project, ...Project[]];

export type ProjectId = (typeof projects)[number]["id"];

export default projects;
