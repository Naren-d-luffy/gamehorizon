module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-green-600", "bg-green-300", "bg-yellow-300", "bg-red-600"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        myFont: ['"MyFont"', "sans-serif"],
        head: ['"Fredericka the Great"', "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#4ABFD1",
        about: "#B9FFF8",
        ctext: "#EAE0D5",
        btext: "#D7CDCC",
      },
      cursor: {
        custom: "url('/assets/crosshair.png')",
      },
    },
  },
  plugins: [],
};
