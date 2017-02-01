'use strict';

var request = require('request');

var data = {
    url: ['http://fex.net/', 'http://fex.net/']
};

var start = new Date();
data.url.forEach(function (item) {

    request.get(item, function (err, response) {
        // NOT GOOD
        console.log('Request time plus 5 seconds', new Date() - start);
    });
});

//# sourceMappingURL=test2-compiled.js.map