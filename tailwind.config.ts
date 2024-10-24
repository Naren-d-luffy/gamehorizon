module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        myFont: ['"MyFont"', 'sans-serif'],
        head: ['"Fredericka the Great"', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#4ABFD1",
        about: "#B9FFF8",
        ctext: "#EAE0D5",
        btext: "#D7CDCC"
      },
      cursor: {
        custom: "url('/assets/crosshair.png')",
      },
    },
  },
  plugins: [],
};
