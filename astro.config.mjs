import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

export default defineConfig({
    integrations: [tailwind()],
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
    build: {
        inlineStylesheets: "always",
    },
    output: "hybrid",
    vite: {
        build: {
            cssMinify: "lightningcss",
        },
        ssr: {
            noExternal: ["path-to-regexp"],
        },
    },
})