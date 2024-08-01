/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      bg: "#1F1F28",
      fg: "#DCD7BA",
    },
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
};
