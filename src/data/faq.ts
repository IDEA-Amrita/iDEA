export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is-idea",
    number: "01",
    question: "What is iDEA Club?",
    answer:
      "iDEA Club is a student-driven innovation community focused on turning ideas into real projects. It brings together students with different skills and interests to collaborate, experiment, build, and take promising ideas further.",
  },
  {
    id: "what-we-do",
    number: "02",
    question: "What does iDEA Club actually do?",
    answer:
      "iDEA Club provides a platform for students to explore ideas, form teams, and work on projects from concept to implementation. Through **Special Interest Groups, projects, events, mentorship, and collaboration**, members get opportunities to build, experiment, and take their work beyond the classroom.",
  },
  {
    id: "who-can-join",
    number: "03",
    question: "Who can join iDEA Club?",
    answer:
      "iDEA Club is open to students from **second year onwards**, across all branches and disciplines. You don't need to come from a technical background or already have a project idea. If you're interested in building, experimenting, solving problems, or contributing, there's a place for you in iDEA.",
  },
  {
    id: "how-to-join",
    number: "04",
    question: "How do I join iDEA Club?",
    answer:
      "iDEA Club conducts **recruitment once every academic year**. During the recruitment period, students can submit an application and go through the selection process, which includes an interview. Selected students become **iDEators** and join the club's project ecosystem, where they can collaborate with other members, contribute to existing initiatives, and develop ideas into real projects.",
  },
  {
    id: "idea-vs-skills",
    number: "05",
    question:
      "I have an idea but don't know how to build it. Or I have a skill but no idea. Can I still contribute?",
    answer:
      "Absolutely. **You don't need both an idea and the ability to build it.** If you have an idea, iDEA provides the environment and people to help you explore and develop it. If you have a skill but no idea, you can contribute to existing projects, collaborate with other iDEators, and find opportunities where your skills can make an impact.",
  },
];
