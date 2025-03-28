import { siteConfig } from "@/config/metadata";

export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/products",
    "/products/biscuits",
    "/products/wafers",
    "/products/chocolate",
    "/products/candy",
    "/gallery",
    "/news",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
