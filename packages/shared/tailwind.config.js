/** @type {import('tailwindcss').Config} */

const colors = require("./src/tailwind/colors");

module.exports = {
      content: ["./**/*.{js,ts,jsx,tsx}"],
      darkMode: ["class"],
      theme: {
            extend: {
                  colors: {
                        primary: "var(--color-primary)",
                        secondary: "var(--color-secondary)",
                  },
            },
      },
      plugins: [],
};
