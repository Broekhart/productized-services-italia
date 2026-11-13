import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://www.productizedservicesitalia.it",
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [sitemap()],
});
