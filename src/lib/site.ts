import { profile } from "@/data/profile";

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://kevin.dev). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const SITE_TITLE = `${profile.name} — ${profile.role}`;
export const SITE_DESCRIPTION = profile.description;
