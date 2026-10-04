import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import texts from "./src/data/texts.ts";

export default defineConfig(({ mode }) => ({
  base: "/",
  build: { manifest: true },
  plugins: [
    react(),
    {
      name: "site-metadata",
      transformIndexHtml(html) {
        const domain = loadEnv(
          mode,
          ".",
          "VERCEL_PROJECT_PRODUCTION_URL",
        ).VERCEL_PROJECT_PRODUCTION_URL;
        const canonical = domain
          ? new URL(`https://${domain}`).href
          : undefined;
        return {
          html: html
            .replace(
              "<title>iDEA</title>",
              `<title>${texts.metadata.title}</title>`,
            )
            .replace("%NOSCRIPT%", texts.metadata.noScript),
          tags: [
            {
              tag: "meta",
              attrs: {
                property: "og:image",
                content: canonical
                  ? new URL("og-image.png", canonical).href
                  : "/og-image.png",
              },
            },
            {
              tag: "meta",
              attrs: { property: "og:image:width", content: "1200" },
            },
            {
              tag: "meta",
              attrs: { property: "og:image:height", content: "630" },
            },
            {
              tag: "meta",
              attrs: {
                property: "og:image:alt",
                content: texts.metadata.title,
              },
            },
            {
              tag: "meta",
              attrs: { name: "twitter:card", content: "summary_large_image" },
            },
            {
              tag: "meta",
              attrs: {
                name: "twitter:image",
                content: canonical
                  ? new URL("og-image.png", canonical).href
                  : "/og-image.png",
              },
            },
            {
              tag: "meta",
              attrs: {
                name: "description",
                content: texts.metadata.description,
              },
            },
            {
              tag: "meta",
              attrs: { property: "og:title", content: texts.metadata.title },
            },
            {
              tag: "meta",
              attrs: {
                property: "og:description",
                content: texts.metadata.socialDescription,
              },
            },
            { tag: "meta", attrs: { property: "og:type", content: "website" } },
            ...(canonical
              ? [
                  { tag: "link", attrs: { rel: "canonical", href: canonical } },
                  {
                    tag: "meta",
                    attrs: { property: "og:url", content: canonical },
                  },
                ]
              : []),
          ],
        };
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    testTimeout: 15000,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
    },
  },
}));
