import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        eyeSleeping: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        eyeLoockAround: {
          "0%": {
            transform: "translateX(0) rotateY(0)",
          },
          "10%": {
            transform: "translateX(0) rotateY(0)",
          },
          "40%": {
            transform: "translateX(-70px) rotateY(-30deg)",
          },
          "80%": {
            transform: "translateX(70px) rotateY(30deg)",
          },
          "100%": {
            transform: "translateX(0) rotateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
