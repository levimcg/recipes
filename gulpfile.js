const {src, dest, series} = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');

function compileCSS() {
  return src('./src/css/styles.css')
    .pipe(postcss([
      postcssImport()
    ]))
    .pipe(dest('./site/css/'));
}

exports.compileCSS = compileCSS;

