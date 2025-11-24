import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.paybridge.com";
  const routes = [
    "",
    "/solutions",
    "/industries",
    "/developers",
    "/resources",
    "/about",
    "/contact",
    "/login"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
