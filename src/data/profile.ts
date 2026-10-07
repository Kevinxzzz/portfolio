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
    cv: "/cv/kevin-maravilha-cv.pdf",
  },
  contact: {
    email: undefined,
    github: undefined,
    linkedin: undefined,
  },
  description:
    "Full Stack Developer especializado em React, Next.js, Node.js, TypeScript e PostgreSQL.",
};

export const aboutStatements: AboutStatement[] = [
  {
    key: "Who",
    text: "Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas.",
  },
  {
    key: "What",
    text: "Aplicações web, APIs, sistemas SaaS e projetos para clientes reais.",
  },
  {
    key: "How",
    text: "Frontend e backend, buscando aplicações organizadas, escaláveis e com boa experiência de usuário.",
  },
  {
    key: "Next",
    text: "Aberto a oportunidades e projetos.",
  },
];
