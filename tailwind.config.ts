import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/page.tsx",
		"./src/app/layout.tsx",
	],
	theme: {
		extend: {
			backgroundImage: {
				clientGradient:
					"var(--gradientSafe, linear-gradient(285deg, #FFF -31.98%, #75FFCA 51.24%, #3FFFB6 102.03%))",
				adminGradient:
					"var(--gradientAdm, linear-gradient(285deg, #000 -31.98%, #3E8D6F 51.24%, #1D654A 102.03%))",
			},
		},
	},
	plugins: [],
};
export default config;
