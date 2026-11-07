export type SectionId =
  | "about"
  | "stack"
  | "projects"
  | "experience"
  | "education"
  | "contact";

/** What the interface is currently showing: the core or one section. */
export type ViewId = "core" | SectionId;

/** Position of a node on the stage, in percent (0–100) of its width/height. */
export interface NodePosition {
  x: number;
  y: number;
}

export interface SectionMeta {
  id: SectionId;
  /** Two-digit index shown next to the label, e.g. "03". */
  index: string;
  label: string;
  position: NodePosition;
}

export interface ContactLinks {
  email?: string;
  github?: string;
  linkedin?: string;
  phone?: string;
  whatsapp?: string;
}

export interface Profile {
  name: string;
  fullName: string;
  role: string;
  availability: string;
  photoAlt: string;
  /** Public paths. Resolved at build time — see `lib/assets.ts`. */
  assets: {
    photo: string;
    cv: string;
  };
  contact: ContactLinks;
  description: string;
}

export interface ResolvedAssets {
  photo: string | null;
  cv: string | null;
}

export interface AboutStatement {
  key: string;
  text: string;
}

export interface StackGroup {
  id: string;
  label: string;
  items: string[];
}

export interface ArchitectureLayer {
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  summary: string;
  features: string[];
  /** Technologies grouped by the role they play. The flat list is derived. */
  layers: ArchitectureLayer[];
  href?: string;
  url?: string;
  repository?: string;
}

export interface ExperienceEntry {
  id: string;
  /** Short category shown in the left column (no dates are invented). */
  kind: string;
  role: string;
  organization?: string;
  period?: string;
  summary: string;
  responsibilities: string[];
  technologies?: string[];
  result?: string;
}

export interface Education {
  id: string;
  kind: string;
  course: string;
  institution?: string;
  status: string;
}
