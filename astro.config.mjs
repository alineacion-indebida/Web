import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"
import vercel from "@astrojs/vercel/serverless"
import decapCmsOauth from "astro-decap-cms-oauth"

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
		decapCmsOauth({ adminDisabled: true }),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	adapter: vercel({
		webAnalytics: { enabled: true },
		functionPerRoute: false,
	}),
	build: {
		inlineStylesheets: "always",
	},
	output: "hybrid",
	site: seoConfig.baseURL,
	vite: {
		resolve: {
			preserveSymlinks: true,
		},
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
	redirects: {
		"/quiensomos/": "/quienes-somos/",
		"/noticias/2024-04-22-vuelve-el-doctor-jekill-y-mr-hide/": "/noticias/2024-04-22-vuelve-el-doctor-jekyll-y-mr-hide/",
	},
})