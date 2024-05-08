/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Buttons
        button: "#1C1C1C",
        "button-brand-primary-hover": "#4E4E4E",
        "button-secondary-border": "#EAEAEA",
        "button-secondary-hover": "#F1F1F1",

        // Carousel
        "carousel-active": "#2DA950",
        "carousel-inactive": "#E4E3E3",
        "carousel-hover": "#CAD0CB",

        // General
        body: "#828282",
        "accordion-header": "#617275",
        "accordion-content": "#E8EEE7",
        "accordion-item-border": "#D7D7D7",
        "footer-background": "#F5F5F5",
        "background-dark": "#002E18",
        "highlight-green": "#2DA950",
        "highlight-gray": "#9E9D9D",
        "icon-background": "#DDEFE0",
        "floating-box-1": "#002E18",

        error: "#FF0808",
      },
    },
  },
  plugins: [],
};
