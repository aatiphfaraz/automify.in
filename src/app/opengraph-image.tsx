import { ImageResponse } from "next/og";

export const alt = "automify.in - Build & Scale MVPs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(to bottom, #0a0a0a, #0f0f1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
          automify.in
        </div>
        <div style={{ fontSize: 40, color: "#3b82f6", marginBottom: 10 }}>
          Build & Scale MVPs
        </div>
        <div style={{ fontSize: 30, color: "#a0a0a0" }}>
          Enterprise-Grade Engineering for Startups
        </div>
      </div>
    ),
    size
  );
}
