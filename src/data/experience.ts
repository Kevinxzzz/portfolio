import type { ExperienceEntry } from "@/types";

/**
 * Timeline entries. `period`, `organization`, `technologies` and `result`
 * are optional: they are only rendered when provided. No dates are invented —
 * add `period: "2024 — Present"` etc. when you want them to appear.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    kind: "Freelance",
    role: "Desenvolvedor Full Stack",
    organization: "Projetos freelance e clientes reais",
    summary: "Desenvolvimento de aplicações do frontend ao backend para clientes reais.",
    responsibilities: ["Aplicações web com frontend e backend", "APIs e sistemas SaaS"],
  },
  {
    id: "aspan",
    kind: "Projeto em equipe",
    role: "Desenvolvedor Web e Mobile",
    organization: "Projeto ASPAN",
    summary: "Desenvolvimento web e mobile em equipe.",
    responsibilities: [],
  },
  {
    id: "instructor",
    kind: "Ensino",
    role: "Instrutor de Introdução à Programação",
    summary: "Atuação como instrutor de Introdução à Programação.",
    responsibilities: [],
  },
];

/** Shown under the timeline as practices, not attached to a single role. */
export const workingPractices: string[] = [
  "Integrações",
  "Planejamento",
  "Sprints",
  "Trabalho colaborativo",
];
