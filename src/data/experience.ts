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
    summary:
      "Desenvolvimento e manutenção de aplicações web para clientes reais, atuando no frontend, backend e integração entre sistemas.",
    responsibilities: [
      "Desenvolvimento de interfaces e funcionalidades web",
      "Criação e integração de APIs REST",
      "Implementação de sistemas SaaS e funcionalidades de negócio",
      "Integração com bancos de dados e serviços externos",
    ],
  },
  {
    id: "equipe",
    kind: "Projeto em equipe",
    role: "Desenvolvedor Web e Mobile",
    organization: "Startup — Projeto ASPAN",
    summary:
      "Participação no desenvolvimento de um sistema de gestão voltado ao cuidado de idosos, colaborando com as equipes web e mobile.",
    responsibilities: [
      "Desenvolvimento de funcionalidades para aplicações web e mobile Android",
      "Integração entre componentes e serviços do sistema",
      "Colaboração em planejamento, reuniões diárias e sprints",
      "Trabalho em equipe e alinhamento de requisitos técnicos",
    ],
  },
  {
    id: "instructor",
    kind: "Ensino",
    role: "Instrutor de Introdução à Programação",
    organization: "Escola de Computação Solidária",
    summary:
      "Ensino de fundamentos de programação para adolescentes, com foco na compreensão da lógica e no desenvolvimento do raciocínio computacional.",
    responsibilities: [
      "Explicação de conceitos básicos de programação",
      "Orientação de alunos na resolução de exercícios e problemas",
      "Adaptação da comunicação para diferentes níveis de compreensão",
    ],
  },
];


/** Shown under the timeline as practices, not attached to a single role. */
export const workingPractices: string[] = [
  "Integrações",
  "Planejamento",
  "Sprints",
  "Trabalho colaborativo",
];
