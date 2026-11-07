import type { Project } from "@/types";

/**
 * Featured projects.
 * Only technologies and features that were provided are listed.
 * Add `href` / `repository` to any project to render a link.
 *
 * Freelance / client projects can be appended here later; the UI adapts.
 */
export const projects: Project[] = [
  {
    id: "nutrisass",
    name: "NutriSass",
    kind: "SaaS",
    href: "https://www.nutrisass.com.br",
    url: "https://www.nutrisass.com.br",
    summary:
      "SaaS para gestão de atendimentos nutricionais, com gerenciamento de pacientes, agendamentos, questionários e comunicação em tempo real.",
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
      {
        label: "Interface",
        items: [
          "React",
          "Vite",
          "TypeScript",
          "SCSS",
          "React Query",
        ],
      },
      {
        label: "API",
        items: ["Node.js", "Express", "Prisma", "REST APIs"],
      },
      {
        label: "Database",
        items: ["PostgreSQL", "Redis"],
      },
      {
        label: "Infra",
        items: ["Socket.IO", "Docker"],
      },
    ],
  },

  {
    id: "kzn",
    name: "Kzn",
    kind: "Plataforma de biolink",
    href: "https://kzngg.com",
    url: "https://kzngg.com",
    summary:
      "Plataforma de biolink para influenciadores de jogos online, com gerenciamento de links, páginas públicas, autenticação e integração entre sistemas.",
    features: [
      "Sistema de influenciadores",
      "Páginas públicas",
      "Gerenciamento de links",
      "Autenticação",
      "Múltiplos níveis de acesso",
      "Integração entre sistemas",
    ],
    layers: [
      {
        label: "Interface",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "SCSS",
          "React Query",
        ],
      },
      {
        label: "API",
        items: ["Node.js", "Express", "Prisma", "REST APIs"],
      },
      {
        label: "Data",
        items: ["PostgreSQL", "Redis"],
      },
      {
        label: "Infra",
        items: ["Docker"],
      },
    ],
  },

  {
    id: "bluefoot",
    name: "BlueFoot",
    kind: "Marketplace",
    href: "https://bluefootgg.com",
    url: "https://bluefootgg.com",
    summary:
      "Marketplace desenvolvido com Next.js, com catálogo de produtos, autenticação, controle de acesso e gerenciamento de mídia.",
    features: [
      "Autenticação",
      "Catálogo",
      "Produtos",
      "Múltiplos níveis de acesso",
      "Integração entre sistemas",
      "Upload de imagens e vídeos",
    ],
    layers: [
      {
        label: "Interface",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "SCSS",
          "React Query",
        ],
      },
      {
        label: "API",
        items: [
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL",
          "REST APIs",
        ],
      },
      {
        label: "Data fetching",
        items: ["Axios", "React Query"],
      },
      {
        label: "Infra",
        items: ["Docker", "Cloudflare R2"],
      },
    ],
  },

  // {
  //   id: "imperio",
  //   name: "Imperio Vendas",
  //   kind: "Plataforma de biolink",
  //   summary:
  //     "Plataforma de biolink para criação e gerenciamento de páginas públicas e links, com rotação automática de URLs.",
  //   features: [
  //     "Página pública",
  //     "Gerenciamento de links",
  //     "Rotação de URL automática",
  //     "Autenticação",
  //   ],
  //   layers: [
  //     {
  //       label: "Interface",
  //       items: ["React", "TypeScript", "Tailwind"],
  //     },
  //     {
  //       label: "API",
  //       items: [
  //         "Node.js",
  //         "Express",
  //         "Prisma",
  //         "PostgreSQL",
  //         "REST APIs",
  //       ],
  //     },
  //   ],
  // },

  {
    id: "alecionardes",
    name: "Alecio Nardes",
    kind: "Plataforma de biolink",
    href: "https://alecionardes.com",
    url: "https://alecionardes.com",
    summary:
      "Plataforma de biolink para influenciadores, com páginas públicas, gerenciamento de links e integração entre sistemas.",
    features: [
      "Página pública",
      "Gerenciamento de links",
      "Rotação de URL automática",
      "Autenticação",
    ],
    layers: [
      {
        label: "Interface",
        items: ["React", "TypeScript", "Tailwind", "Vite"],
      },
      {
        label: "API",
        items: [
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL",
          "REST APIs",
        ],
      },
    ],
  },
];