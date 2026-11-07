import type { StackGroup } from "@/types";

/** Grouped by function. No proficiency levels on purpose. */
export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Query", "Vite", "SCSS", "Tailwind",],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL"],
  },
  {
    id: "infra",
    label: "Infra / Tools",
    items: ["Docker", "Redis", "Cloudflare R2", "AWS S3", "Socket.IO"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter"],
  },
];
