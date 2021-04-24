const dateTime = require('./src/filters/dateTime');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.setBrowserSyncConfig({
    open: 'local'
  });
  
  eleventyConfig.addFilter('dateFormatted', dateTime);

  // Watch targets
  eleventyConfig.addWatchTarget('./src/scss/');

  return {
    dir: {
      input: 'src',
      output: 'site'
    }
  }
}