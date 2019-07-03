const {src, dest, series, watch} = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');

function compileCSS() {
  return src('./src/css/styles.css')
    .pipe(postcss([
      postcssImport()
    ]))
    .pipe(dest('./site/css/'));
}

function watchFiles(cb) {
  watch('./src/css/**/*.css', compileCSS);
}

exports.compileCSS = compileCSS;
exports.default = watchFiles;

