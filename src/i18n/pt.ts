import { aboutStatements, profile } from "@/data/profile";
import { experience, workingPractices } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { stackGroups as stack } from "@/data/stack";

export const pt = {
  profile: {
    ...profile,
    role: "Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, Node.js, TypeScript e PostgreSQL.",
    availability: "Disponível para oportunidades",
  },
  aboutStatements,
  experience,
  workingPractices,
  projects: projects.map(proj => ({
    ...proj,
    // Add translation later if needed
  })),
  education,
  stack,
  sections: [
    { id: "about", label: "SOBRE" },
    { id: "experience", label: "EXPERIÊNCIA" },
    { id: "projects", label: "PROJETOS" },
    { id: "stack", label: "STACK" },
    { id: "education", label: "FORMAÇÃO" },
    { id: "contact", label: "CONTATO" },
  ],
  ui: {
    backToCore: "Voltar ao núcleo",
    navigateMenu: "Pressione 1–6 para navegar",
    selectLanguage: "Select language",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    
    aboutTitle: "Sobre",
    aboutIntro: "Quem sou e o que faço.",
    stackTitle: "Stack",
    stackIntro: "Tecnologias e ferramentas que utilizo.",
    projectsTitle: "Projetos",
    projectsIntro: "Projetos em destaque.",
    experienceTitle: "Experiência",
    experienceIntro: "Minha trajetória profissional.",
    educationTitle: "Formação",
    educationIntro: "Formação acadêmica e cursos.",
    contactTitle: "Contato",
    contactIntro: "Vamos trabalhar juntos.",
    
    noProjects: "Nenhum projeto encontrado.",
    projectDetails: "Detalhes do projeto",
    
    contactMethods: "Você pode me encontrar nestas plataformas:",
    
    roleAt: "na",
    present: "O momento",

    downloadCV: "Baixar CV",
    getInTouch: "Entrar em contato",

    features: "Características",
    technologies: "Tecnologias",
    viewProject: "Ver projeto",
    repository: "Repositório",
  }
};
