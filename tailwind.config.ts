import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< HEAD
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
=======
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        clientGradient:
          "var(--gradientSafe, linear-gradient(285deg, #FFF -31.98%, #75FFCA 51.24%, #3FFFB6 102.03%))",
        bg_auth: "url('../../public/fundo_form.png')",
      },
      adminGradient:
        "var(--gradientAdm, linear-gradient(285deg, #000 -31.98%, #3E8D6F 51.24%, #1D654A 102.03%))",
    },
  },
  plugins: [],
>>>>>>> bd524bc95b1ca464624ed26633a7c67835a6b027
};
export default config;
