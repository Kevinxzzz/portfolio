import type { Project } from "@/types";

const normalize = (name: string): string => name.trim().toLowerCase();

/** Flat, de-duplicated technology list of a project (derived from its layers). */
export function getProjectTechnologies(project: Project): string[] {
  return Array.from(new Set(project.layers.flatMap((layer) => layer.items)));
}

/** technology (normalised) -> projects that use it. */
export function buildTechnologyIndex(projects: Project[]): Map<string, Project[]> {
  const index = new Map<string, Project[]>();

  for (const project of projects) {
    for (const technology of getProjectTechnologies(project)) {
      const key = normalize(technology);
      index.set(key, [...(index.get(key) ?? []), project]);
    }
  }

  return index;
}

export function findProjectsUsing(
  index: Map<string, Project[]>,
  technology: string,
): Project[] {
  return index.get(normalize(technology)) ?? [];
}
