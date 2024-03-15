// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://alineacion-indebida.vercel.app/", // Production URL.
	description:
		"Web Oficial del programa Alineación Indebida. El programa de Unionistas de Salamanca y todo el deporte salmantino.",
	type: "website",
	image: {
		url: "https://alineacion-indebida.vercel.app/img/og.jpg",
		alt: "Alineacion indebida",
		width: 705,
		height: 606,
	},
	siteName: "Alineacion indebida",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Alineacion indebida",
	short_name: "Alineacion indebida",
	description:
		"Web Oficial del programa Alineación Indebida. El programa de Unionistas de Salamanca y todo el deporte salmantino.",
	theme_color: "#d5ff00",
	background_color: "#d5ff00",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}