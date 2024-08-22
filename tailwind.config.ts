import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          10: "#5F5F5F",
          20: "#010101",
        },
        orange: {
          10: "#FF9748",
          20: "#FF4C24",
          30:"#FFF8F2"
        },
        grey: {
          10: "#00000029"
        }
      },
      fontSize: {
        custom_xl: ["44px", "52px"],
        custom_2xl: ["56px", "66px"]
      },
      fontFamily: {
        rubik: ["Rubik", 'sans-serif'],
      },
      boxShadow: {
        cardShadow: "0px 0px 16px 6px #8080801F",
        faqShadow: "0px 0px 16px 6px #8080801F",
      },
    },
  },
  plugins: [],
};

export default config;
