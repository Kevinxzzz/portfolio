import { SECTIONS } from "@/data/sections";
import type { SectionId, SectionMeta, ViewId } from "@/types";

export function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value);
}

export function getSection(id: SectionId): SectionMeta {
  const section = SECTIONS.find((item) => item.id === id);
  if (!section) throw new Error(`Unknown section: ${id}`);
  return section;
}

export function viewFromHash(hash: string): ViewId {
  const id = hash.replace(/^#/, "");
  return isSectionId(id) ? id : "core";
}

export function getSectionByIndex(position: number): SectionMeta | undefined {
  return SECTIONS[position];
}
