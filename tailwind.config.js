const defaultTheme = require("tailwindcss/defaultTheme");

const regex = new RegExp(/production/);
const production = process.argv.some((e) => regex.test(e));

// Config files
const settings = require("./webpack.settings.js");

// tailwind.config.js
module.exports = {
  target: "ie11",
  purge: {
    enabled: production,
    content: settings.purgeCssConfig.paths,
    options: {
      whitelistPatterns: settings.purgeCssConfig.whitelistPatterns,
      whitelist: settings.purgeCssConfig.whitelist,
    },
  },
  theme: {
    screens: {
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1920px",
    },
    fontSize: {
      xxs: "var(--text-small)",
      xs: "var(--text-tiny)",
      sm: "var(--text-caption)",
      base: "var(--text-p)",
      lg: "var(--text-h6)",
      xl: "var(--text-h5)",
      "2xl": "var(--text-h4)",
      "3xl": "var(--text-h3)",
      "4xl": "var(--text-h2)",
      "5xl": "var(--text-h1)",
      "6xl": "var(--text-lead)",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: "var(--color-black)",
        white: "var(--color-white)",

        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },

        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-family-primary)",
          ...defaultTheme.fontFamily.serif,
        ],
        sans: [
          "var(--font-family-secondary)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      spacing: {
        ...defaultTheme.spacing,
        "14": "3.5rem",
        "72": "18rem",
        "80": "20rem",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwind-css-variables")(
      {
        colors: "color",
        screens: false,
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: "spacing",
      },
      {},
    ),
  ],
};
