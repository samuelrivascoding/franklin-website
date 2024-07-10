/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color-primary": "#fff",
        "link-primary": "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(0, 0, 0, 0.8)",
        },
      },
      spacing: {},
      fontFamily: {
        "heading-desktop-h5": "Raleway",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "5xl": "24px",
      "37xl": "56px",
      "21xl": "40px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq756: {
        raw: "screen and (max-width: 756px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
