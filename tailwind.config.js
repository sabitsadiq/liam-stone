/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      linearGradientColor: {
        "custom-gradient":
          "linear-gradient(180deg, #5A5A5A 0%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
