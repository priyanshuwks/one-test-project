import { Grey_Qo } from "next/font/google";
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
      fontFamily : {
        pacifico : ['Pacifico', 'cursive'],
        basker : ['Libre Baskerville', 'serif'],
        edu : ['Edu AU VIC WA NT Hand', 'cursive'],
        Grey_Qo : ['Grey Qo', 'cursive']
      }
    },
  },
  plugins: [],
};
export default config;
