import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#07090d",
          color: "#e9edf3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#8a97ab" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#5cc8f5" }} />
          {profile.availability.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 120, fontWeight: 300, letterSpacing: -5, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 32, color: "#8a97ab", letterSpacing: 4 }}>
            {profile.role.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
