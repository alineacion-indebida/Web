import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import partytown from '@astrojs/partytown'
import vercel from "@astrojs/vercel/serverless"

import { VitePWA } from "vite-plugin-pwa"
import { defineConfig } from "astro/config"

import { manifest, seoConfig } from "./src/utils/seoConfig"

export default defineConfig({
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	integrations: [
		tailwind(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		})
	],
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	build: {
		inlineStylesheets: "always",
	},
	output: "hybrid",
	site: seoConfig.baseURL,
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
					navigateFallback: null,
				},
			}),
		],
	},
})