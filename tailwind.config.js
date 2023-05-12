/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#76e21d",

          secondary: "#a3272d",

          accent: "#ffe7c9",

          neutral: "#14141F",

          "base-100": "#EEEDF2",

          info: "#82A0D9",

          success: "#1A9E76",

          warning: "#F4C03E",

          error: "#FB6089",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
