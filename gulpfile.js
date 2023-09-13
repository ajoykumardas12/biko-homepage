const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function buildDistStyles() {
  return src("src/scss/styles.scss").pipe(sass()).pipe(dest("public/css"));
}

function watchTask() {
  watch(["src/scss/**/*.scss"], buildDistStyles);
}

exports.default = series(buildDistStyles, watchTask);
