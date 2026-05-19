import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // General crawlers: allow everything
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      {
        // Block AI training crawlers
        // Policy: Il Paroliere is open content (CC BY-SA 4.0) but
        // AI training without attribution violates the license.
        // We block bulk training crawlers; search AI overviews are allowed.
        userAgent: ["GPTBot", "CCBot", "Bytespider", "anthropic-ai"],
        disallow: "/",
      },
    ],
    sitemap: "https://ilparoliere.online/sitemap.xml",
  };
}
