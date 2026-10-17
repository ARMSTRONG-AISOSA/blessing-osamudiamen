import { ImageResponse } from "next/og";
import { site } from "@/data/profile";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen / bookmark icon: navy tile, white monogram, orange accent square (matches app/icon.svg). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", position: "relative" }}>
        <div style={{ position: "absolute", top: 22, right: 22, width: 34, height: 34, borderRadius: 8, border: "8px solid #f97316" }} />
        <div style={{ fontSize: 76, fontWeight: 700, color: "#ffffff", letterSpacing: 2, marginTop: 12 }}>{site.initials}</div>
      </div>
    ),
    size,
  );
}
