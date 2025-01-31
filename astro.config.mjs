import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"
import decapCmsOauth from "astro-decap-cms-oauth"

import { VitePWA } from "vite-plugin-pwa"
import { defineConfig, envField } from "astro/config"

import { manifest, seoConfig } from "./src/utils/seoConfig"
import { externalLink } from "./src/utils/externalLink"

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
	markdown: {
		rehypePlugins: [[externalLink, { domain: seoConfig.baseURL }]],
	},
	build: {
		inlineStylesheets: "always",
	},
	output: "server",
	site: seoConfig.baseURL,
	vite: {
		resolve: {
			preserveSymlinks: true,
		},
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["css", "@fontsource-variable/jost", "path-to-regexp"],
		},
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
					runtimeCaching: [
						{
							urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
							handler: "CacheFirst",
							options: {
								cacheName: "images",
								expiration: {
									maxEntries: 100,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
						{
							urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
							handler: "CacheFirst",
							options: {
								cacheName: "fonts",
								expiration: {
									maxEntries: 10,
									maxAgeSeconds: 30 * 24 * 60 * 60,
								},
							},
						},
					],
					navigateFallback: null,
					maximumFileSizeToCacheInBytes: 4000000,
				},
			}),
		],
	},
	redirects: {
		"/quiensomos/": "/quienes-somos/",
		"/noticias/2024-04-22-vuelve-el-doctor-jekill-y-mr-hide/": "/noticias/2024-04-22-vuelve-el-doctor-jekyll-y-mr-hide/",
		"/noticias/240317-la-opinion-osasuna-promesas": "/noticias/2024-03-17-la-opinion-osasuna-promesas",
		"/noticias/240318-la-firma-osasuna-promesas.md": "/noticias/2024-03-18-la-firma-osasuna-promesas.md",
		"/noticias/240318-mucho-miedo.md": "/noticias/2024-03-18-mucho-miedo.md",
		"/noticias/240321-numeros-pol-v1.md": "/noticias/2024-03-21-numeros-pol-v1.md",
		"/noticias/240325-la-opinion-nastic-unionistas.md": "/noticias/2024-03-25-la-opinion-nastic-unionistas.md",
		"/noticias/240326-el-coyote-y-el-correcaminos.md": "/noticias/2024-03-26-el-coyote-y-el-correcaminos.md",
		"/noticias/240327-cronica-chapuzon-anunciado.md": "/noticias/2024-03-27-cronica-chapuzon-anunciado.md",
		"/noticias/240328-numeros-pol-v2.md": "/noticias/2024-03-28-numeros-pol-v2.md",
		"/noticias/240331-cronica-ganar-y-merecer.md": "/noticias/2024-03-31-cronica-ganar-y-merecer.md",
		"/noticias/240401-opinion-indebida-fiesta-futbol-popular.md": "/noticias/2024-04-01-opinion-indebida-fiesta-futbol-popular.md",
		"/noticias/240402-la-jornada-30.md": "/noticias/2024-04-02-la-jornada-30.md",
		"/noticias/240404-numeros-pol-v3.md": "/noticias/2024-04-04-numeros-pol-v3.md",
		"/noticias/240408-la-firma-depor.md": "/noticias/2024-04-08-la-firma-depor.md",
		"/noticias/240409-opinion-indebida-depor.md": "/noticias/2024-04-09-opinion-indebida-depor.md",
		"/noticias/240410-la-jornada-31.md": "/noticias/2024-04-10-la-jornada-31.md",
	},
	env: {
		schema: {
			OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
			OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
			OAUTH_GITHUB_REPO_ID: envField.string({ context: "server", access: "secret", optional: true }),
			PUBLIC_DECAP_CMS_SRC_URL: envField.string({ context: "client", access: "public", optional: true }),
			PUBLIC_DECAP_CMS_VERSION: envField.string({ context: "client", access: "public", optional: true }),
		},
	},
})