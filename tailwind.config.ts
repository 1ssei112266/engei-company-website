import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        caramellatte: {
          primary: "#000000",
          secondary: "#4B1E1E",
          accent: "#A75525",
          neutral: "#78261F",
          "base-100": "#F8F1EA",
          info: "#3B82F6",
          success: "#15803D",
          warning: "#EAB308",
          error: "#F43F5E",
        },
      },
    ],
  },
};

export default config;