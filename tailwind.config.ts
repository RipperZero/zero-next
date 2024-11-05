import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

import tailwindcssForms from "@tailwindcss/forms";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: true,
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
        eyeLookAround: {
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

      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
    },

    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [tailwindScrollbar, tailwindcssForms],
} satisfies Config;
