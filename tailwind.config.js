const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./flux/**/*.{js,ts,jsx,tsx,mdx}",
    "./hook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: "calc(var(--vh) * 100)",
      },
      minHeight: {
        screen: "calc(var(--vh) * 100)",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
export default config;
