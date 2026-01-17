import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "automify.in - Build & Scale MVPs",
    short_name: "automify.in",
    description: "Enterprise-grade engineering meets startup speed. Build and scale MVPs for startups and small businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
