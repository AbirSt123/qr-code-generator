import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        mds: "950px",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      width: {
        "88": "22rem",
      },
      minWidth: {
        "88": "21rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "light-blue": "rgba(33, 158, 188, 0.16)",
        "main-orange": "#FB8500",
      },
      textColor: {
        "main-orange": "#FB8500",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
