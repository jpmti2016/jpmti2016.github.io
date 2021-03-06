module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),

    require("@fullhuman/postcss-purgecss")({
      //inlude all files that have html, like './src/**/*.js' for react
      content: ["index.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
