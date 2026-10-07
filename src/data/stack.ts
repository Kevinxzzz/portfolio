import type { StackGroup } from "@/types";

/** Grouped by function. No proficiency levels on purpose. */
export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "SCSS", "React Query"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL"],
  },
  {
    id: "infra",
    label: "Infra / Tools",
    items: ["Docker", "Git", "GitHub", "Redis"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter"],
  },
];
