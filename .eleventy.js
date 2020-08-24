module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');
  
  eleventyConfig.setDataDeepMerge(true);
  
  return {
    dir: {
      input: 'src',
      output: 'site'
    }
  }
}