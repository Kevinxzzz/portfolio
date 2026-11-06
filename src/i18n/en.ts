import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { stackGroups as stack } from "@/data/stack";
import type { ExperienceEntry } from "@/types";

export const en = {
  profile: {
    ...profile,
    role: "Full Stack Developer",
    description: "Full Stack Developer specialized in React, Next.js, Node.js, TypeScript and PostgreSQL.",
    availability: "Available for opportunities",
  },
  aboutStatements: [
    { key: "Who", text: "Full Stack Developer and Systems Analysis and Development student." },
    { key: "What", text: "Web applications, APIs, SaaS systems, and projects for real clients." },
    { key: "How", text: "Frontend and backend, striving for organized, scalable applications with great user experience." },
    { key: "Next", text: "Open to new opportunities and projects." }
  ],
  experience: [
    {
      id: "freelance",
      kind: "Freelance",
      role: "Full Stack Developer",
      organization: "Freelance projects and real clients",
      summary: "End-to-end application development for real clients.",
      responsibilities: ["Web applications with frontend and backend", "APIs and SaaS systems"],
    },
    {
      id: "aspan",
      kind: "Team Project",
      role: "Web & Mobile Developer",
      organization: "ASPAN Project",
      summary: "Team-based web and mobile development.",
      responsibilities: [],
    },
    {
      id: "instructor",
      kind: "Teaching",
      role: "Intro to Programming Instructor",
      summary: "Instructor for Introduction to Programming.",
      responsibilities: [],
    },
  ] as ExperienceEntry[],
  workingPractices: ["Integrations", "Planning", "Sprints", "Collaborative work"],
  projects: projects.map(proj => {
    if (proj.id === "nutrisass") return { ...proj, summary: "SaaS for nutritional care management.", features: ["Patient management", "Scheduling", "Notifications", "Questionnaires", "Different access levels", "PDF Generation", "Real-time communication"] };
    if (proj.id === "kzn-biolink") return { ...proj, kind: "Biolink Platform", summary: "Biolink platform focused on eFootball and influencers.", features: ["Influencer system", "Public pages", "Link management", "Authentication", "Multiple access levels", "System integration"] };
    if (proj.id === "shop-martins") return { ...proj, summary: "Marketplace developed with Next.js.", features: ["Authentication", "Catalog", "Products", "WhatsApp integration", "Responsive interface"] };
    return proj;
  }),
  education: {
    course: "Systems Analysis and Development",
    institution: "UNIPÊ",
    status: "In progress",
  },
  stack,
  sections: [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "stack", label: "STACK" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
  ],
  ui: {
    backToCore: "Back to core",
    navigateMenu: "Press 1–6 to navigate",
    selectLanguage: "Select language",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    
    aboutTitle: "About",
    aboutIntro: "Who I am and what I do.",
    stackTitle: "Stack",
    stackIntro: "Technologies and tools I work with.",
    projectsTitle: "Projects",
    projectsIntro: "Featured projects.",
    experienceTitle: "Experience",
    experienceIntro: "My professional journey.",
    educationTitle: "Education",
    educationIntro: "Academic background and courses.",
    contactTitle: "Contact",
    contactIntro: "Let's work together.",
    
    noProjects: "No projects found.",
    projectDetails: "Project details",
    
    contactMethods: "You can find me on these platforms:",
    
    roleAt: "at",
    present: "Present",

    downloadCV: "Download CV",
    getInTouch: "Get in touch",

    features: "Features",
    technologies: "Technologies",
    viewProject: "View project",
    repository: "Repository",
  }
};
