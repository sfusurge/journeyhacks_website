import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: { max: "767px" },
			desktop: "768px", // min-width
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)"],
				wilden: ["var(--font-wilden)"],
			},
		},
	},
	plugins: [],
};
export default config;
