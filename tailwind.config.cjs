/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
        container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
		themes: ["garden"],
    },
}
