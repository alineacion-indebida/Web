import defaultTheme from "tailwindcss/defaultTheme"
import Typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				atomic: ["Atomic", "cursive"],
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				accentlight: "var(--color-accent-light)",
				accentdark: "var(--color-accent-dark)",
				twitch: "var(--color-twitch)",
				spotify: "var(--color-spotify)",
				ice: "var(--color-twitch-ice)",
			},
			screens: {
				xs: "360px",
				...defaultTheme.screens,
			},
		},
	},
	plugins: [
		Typography,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}