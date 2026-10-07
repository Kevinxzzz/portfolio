import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Single-page experience: sections are hash views, so only the root is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];
}
