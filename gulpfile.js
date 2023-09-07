const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function buildDistStyles() {
  return src("scss/styles.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["scss/**/*.scss"], buildDistStyles);
}

exports.default = series(buildDistStyles, watchTask);
