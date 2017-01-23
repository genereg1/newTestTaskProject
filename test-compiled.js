'use strict';

var SitemapGenerator = require('sitemap-generator');

// create generator
var generator = new SitemapGenerator('http://fex.net');

// register event listeners
generator.on('done', function (sitemap) {
    // console.log(sitemap); // => prints xml sitemap
});

generator.on('fetch', function (status, url) {
    console.log(url);
});

// start the crawler
generator.start();

//# sourceMappingURL=test-compiled.js.map