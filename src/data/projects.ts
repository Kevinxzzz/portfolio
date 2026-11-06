import type { Project } from "@/types";

/**
 * Featured projects. Only technologies and features that were provided are
 * listed — add `href` / `repository` to any project to render a link.
 *
 * Freelance / client projects can be appended here later; the UI adapts.
 */
export const projects: Project[] = [
  {
    id: "nutrisass",
    name: "NutriSass",
    kind: "SaaS",
    summary: "SaaS para gestão de atendimentos nutricionais.",
    features: [
      "Gerenciamento de pacientes",
      "Agendamentos",
      "Notificações",
      "Questionários",
      "Diferentes níveis de acesso",
      "Geração de PDF",
      "Comunicação em tempo real",
    ],
    layers: [
      { label: "Interface", items: ["React", "Vite", "TypeScript"] },
      { label: "API", items: ["Node.js", "Express", "Prisma"] },
      { label: "Realtime", items: ["Socket.IO"] },
      { label: "Database", items: ["PostgreSQL"] },
    ],
  },
  {
    id: "kzn-biolink",
    name: "KZN Biolink",
    kind: "Plataforma de biolink",
    summary: "Plataforma de biolink voltada para eFootball e influenciadores.",
    features: [
      "Sistema de influenciadores",
      "Páginas públicas",
      "Gerenciamento de links",
      "Autenticação",
      "Múltiplos níveis de acesso",
      "Integração entre sistemas",
    ],
    layers: [
      { label: "Interface", items: ["Next.js", "React", "TypeScript"] },
      { label: "API", items: ["Node.js", "Express", "Prisma"] },
      { label: "Data", items: ["PostgreSQL", "Redis"] },
      { label: "Infra", items: ["Docker"] },
    ],
  },
  {
    id: "Bluefoot",
    name: "Bluefoot",
    kind: "E-commerce",
    summary: "E-commerce desenvolvido com Next.js.",
    features: [
      "Autenticação",
      "Catálogo",
      "Produtos",
      "Interface responsiva",
    ],
    layers: [
      { label: "Interface", items: ["Next.js", "React", "TypeScript", "SCSS"] },
      { label: "Data fetching", items: ["Axios", "React Query"] },
    ],
  },
];
