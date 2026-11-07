import { existsSync } from "node:fs";
import path from "node:path";

import type { Profile, ResolvedAssets } from "@/types";

function resolvePublicAsset(publicPath: string): string | null {
  const absolute = path.join(process.cwd(), "public", publicPath);
  return existsSync(absolute) ? publicPath : null;
}

/**
 * Server-only. Returns the portrait/CV paths only when the files exist, so the
 * UI never links to something that would 404 (monogram / hidden CV instead).
 */
export function resolveAssets(assets: Profile["assets"]): ResolvedAssets {
  const cvPath = resolvePublicAsset(assets.cv);
  const cvFileName = assets.cvFileName || (cvPath ? path.basename(cvPath) : "Curriculo-Kevin-Maravilha.pdf");

  return {
    photo: resolvePublicAsset(assets.photo),
    cv: cvPath,
    cvFileName,
  };
}
