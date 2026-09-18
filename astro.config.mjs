import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isUserSite = repository === `${owner}.github.io`;
const isDevelopment = process.env.NODE_ENV === "development" || process.env.npm_lifecycle_event === "dev";
const base = isDevelopment
  ? "/"
  : process.env.BASE_PATH ?? (repository && !isUserSite ? `/${repository}` : "/");
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : "http://localhost:4321");

export default defineConfig({
  output: "static",
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()]
});
