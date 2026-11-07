import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { stackGroups as stack } from "@/data/stack";
import type { ExperienceEntry } from "@/types";

export const en = {
  profile: {
    ...profile,
    role: "Full Stack Developer",
    description: "Full Stack Developer specialized in React, Next.js, Node.js, TypeScript, and PostgreSQL.",
    availability: "Available for opportunities",
    photoAlt: "Professional portrait of Kevin Maravilha",
  },
  aboutStatements: [
    { key: "Who", text: "Full Stack Developer with a degree in Systems Analysis and Development." },
    { key: "What", text: "Web applications, APIs, SaaS systems, and solutions developed for real clients." },
    { key: "How", text: "From frontend to backend, focusing on organized architecture, maintainable code, and a good user experience." },
    { key: "Next", text: "Looking for opportunities to grow, build products, and take on new challenges." }
  ],
  experience: [
    {
      id: "freelance",
      kind: "Freelance",
      role: "Full Stack Developer",
      organization: "Freelance projects and real clients",
      summary:
        "Development and maintenance of web applications for real clients, working across frontend, backend, and system integrations.",
      responsibilities: [
        "Development of web interfaces and features",
        "Creation and integration of REST APIs",
        "Implementation of SaaS systems and business features",
        "Integration with databases and external services",
      ],
    },
    {
      id: "equipe",
      kind: "Team project",
      role: "Web and Mobile Developer",
      organization: "Startup — ASPAN Project",
      summary:
        "Participation in the development of a management system focused on elderly care, collaborating with the web and mobile teams.",
      responsibilities: [
        "Development of features for web and Android mobile applications",
        "Integration between system components and services",
        "Collaboration in planning, daily meetings, and sprints",
        "Teamwork and alignment of technical requirements",
      ],
    },
    {
      id: "instructor",
      kind: "Teaching",
      role: "Introduction to Programming Instructor",
      organization: "Escola de Computação Solidária",
      summary:
        "Teaching programming fundamentals to teenagers, focusing on logic comprehension and the development of computational thinking.",
      responsibilities: [
        "Explaining basic programming concepts",
        "Guiding students in solving exercises and problems",
        "Adapting communication to different levels of comprehension",
      ],
    },
  ] as ExperienceEntry[],
  workingPractices: ["Integrations", "Planning", "Sprints", "Collaborative work"],
  projects: projects.map(proj => {
    if (proj.id === "nutrisass") {
      return {
        ...proj,
        summary:
          "SaaS for nutritional care management, with patient management, scheduling, questionnaires, and real-time communication.",
        features: [
          "Patient management",
          "Scheduling",
          "Notifications",
          "Questionnaires",
          "Different access levels",
          "PDF generation",
          "Real-time communication",
        ],
      };
    }
    if (proj.id === "kzn") {
      return {
        ...proj,
        kind: "Biolink platform",
        summary:
          "Biolink platform for online gaming influencers, with link management, public pages, authentication, and system integration.",
        features: [
          "Influencer system",
          "Public pages",
          "Link management",
          "Authentication",
          "Multiple access levels",
          "System integration",
        ],
      };
    }
    if (proj.id === "bluefoot") {
      return {
        ...proj,
        kind: "Marketplace",
        summary:
          "Marketplace developed with Next.js, with product catalog, authentication, access control, and media management.",
        features: [
          "Authentication",
          "Catalog",
          "Products",
          "Multiple access levels",
          "System integration",
          "Image and video uploads",
        ],
      };
    }
    if (proj.id === "alecionardes") {
      return {
        ...proj,
        kind: "Biolink platform",
        summary:
          "Biolink platform for influencers, with public pages, link management, and system integration.",
        features: [
          "Public page",
          "Link management",
          "Automatic URL rotation",
          "Authentication",
        ],
      };
    }
    return proj;
  }),
  education: [
    {
      id: "ads",
      kind: "Degree",
      course: "Systems Analysis and Development",
      institution: "UNIPÊ",
      status: "Completed",
    },
    {
      id: "pensamento-computacional",
      kind: "Course",
      course: "Computational Thinking",
      status: "Completed",
    },
  ],
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
    stackIntro: "Technologies and tools I use.",
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
    viewProject: "Visit website",
    visitWebsite: "Visit website",
    repository: "Repository",
  }
};
