var express = require('express');
var router = express.Router();

var SitemapGenerator = require('sitemap-generator'); 
// create generator
var generator = new SitemapGenerator('http://ex.ua');
 
// register event listeners
generator.on('done', function (sitemap) {
  console.log(sitemap); // => prints xml sitemap
});
 
// start the crawler
generator.start();

module.exports = router;
