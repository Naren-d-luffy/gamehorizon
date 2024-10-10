const config = {
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
        about:"#B9FFF8"
      },
    },
  },
  plugins: [],
};

export default config;
