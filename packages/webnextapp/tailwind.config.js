/** @type {import('tailwindcss').Config} */
module.exports = {
      ...require("shared/tailwind.config"),
      content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "../../packages/shared/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {},
      },
      plugins: [],
};
