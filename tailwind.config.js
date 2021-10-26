const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/index.html",
    "./src/**/*.html",
    "./src/styles/*.css",
    "./src/scripts/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: { backgroundColor: ["checked"] },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ e, addUtilities }) {
      const newUtilities = {
        ".custom": {
          cursor: "pointer",
          borderRadius: "50%",
          padding: "0.6rem",
          fontFamily: "monospace",
          textTransform: "lowercase",
          border: "1px solid transparent",
          backgroundColor: "rgba(107, 184, 218, 0.4)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
