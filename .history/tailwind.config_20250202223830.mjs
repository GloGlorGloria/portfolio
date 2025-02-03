/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', ...fontFamily.sans],
        header: ['EB Garamond', ...fontFamily.serif],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      animation: {
        enlarge: "enlarge 1.5s infinite ease-in-out",
      },
      keyframes: {
        enlarge: {
          "0%, 100%": { transform: "scale(1)", color: "orange" },
          "50%": { transform: "scale(1.3)", color: "dark blue" },
        },
      },
    },
  },
  plugins: [],
};
