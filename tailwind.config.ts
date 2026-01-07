/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B5ED7",
        secondary: "#16A34A",
        dark: "#0F172A",
        muted: "#F1F5F9",
        accent: "#38BDF8",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
