import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {skrepka: "#f0af79"},
      textColor: {skrepka: "#835937"},
      translate: {zov: "50%"},
      animation: {
        text: "text 10s infinite linear",
        text2: "text2 10s infinite linear"
      },
      keyframes: {text: {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0)",
          }
        },
        text2:{
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },

        }},},
  
    fontFamily: { main: ["Poetsen One", "sans-serif"], slava: ["Noto Sans Mono", "monospace"], oswald: ["Oswald", "sans-serif"]},
  },
  plugins: [],
};
export default config;
