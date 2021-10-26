const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: [
        "./src/index.html",
        "./src/**/*.html",
        "./src/styles/*.css",
        "./src/scripts/*.js",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
