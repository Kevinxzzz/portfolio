import type { AboutStatement, Profile } from "@/types";

/**
 * Single source of truth for personal data.
 *
 * Contact links are optional on purpose: anything left `undefined` is simply
 * not rendered (nothing is invented). Fill them in when ready:
 *
 *   email:    "you@example.com"
 *   github:   "https://github.com/<user>"
 *   linkedin: "https://www.linkedin.com/in/<user>"
 *
 * Drop the files below into /public and rebuild — buttons appear automatically:
 *   /public/images/kevin.jpg           (portrait, ideally square ≥ 800px)
 *   /public/cv/kevin-maravilha-cv.pdf  (CV)
 */
export const profile: Profile = {
  name: "Kevin Maravilha",
  fullName: "Kevin Maravilha Henrique da Silva",
  role: "Full Stack Developer",
  availability: "Available for opportunities",
  photoAlt: "Retrato profissional de Kevin Maravilha",
  assets: {
    photo: "/images/foto-profissional.png",
    cv: "/cv/Curriculo.pdf",
  },
  contact: {
    email: "kevinmaravilhapro@gmail.com",
    phone: "+55 83 999911363",
    whatsapp: "https://wa.me/5583999911363",
    github: undefined,
    linkedin: undefined,
  },
  description:
    "Full Stack Developer especializado em React, Next.js, Node.js, TypeScript e PostgreSQL.",
};

export const aboutStatements: AboutStatement[] = [
  {
    key: "Quem",
    text: "Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas.",
  },
  {
    key: "O que",
    text: "Aplicações web, APIs, sistemas SaaS e soluções desenvolvidas para clientes reais.",
  },
  {
    key: "Como",
    text: "Do frontend ao backend, com foco em arquitetura organizada, código sustentável e boa experiência de usuário.",
  },
  {
    key: "Próximo",
    text: "Buscando oportunidades para evoluir, construir produtos e assumir novos desafios.",
  },
];
