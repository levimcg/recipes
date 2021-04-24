const dateTime = require('./src/filters/dateTime');
const image = require('./src/shortcodes/image');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.setBrowserSyncConfig({
    open: 'local'
  });
  
  // Merge data E.g. tags on each .md file with directory data "tags" field
  eleventyConfig.setDataDeepMerge(true);
  
  // Filters
  eleventyConfig.addFilter('dateFormatted', dateTime);
  
  // Shortcodes
  eleventyConfig.addShortcode('image', image);

  // Watch targets
  eleventyConfig.addWatchTarget('./src/scss/');
  
  // Configure markdown settings
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'heading-anchor',
    permalinkSymbol: '#'
  });
  
  // Markdown settings for 11ty
  eleventyConfig.setLibrary('md', markdownLibrary);
  
  // Collections
  eleventyConfig.addCollection("recipes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/recipes/*.md");
  });

  return {
    dir: {
      input: 'src',
      output: 'site'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: "njk"
  }
}