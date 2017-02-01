'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var SitemapGenerator = require('sitemap-generator');

var parser = new xml2js.Parser();

var urlObj;
var urlArr;
var respTime;
var urlArrTest = ['http://fex.net', 'http://example.com', 'http://wikipedia.org'];

var data = {
    url: respTime,
    ms: urlArr
};

var data2 = [{
    url: respTime,
    ms: urlArr
}];

//parse xml file to url array string
function parseUrl(sMapParam) {
    data.url = [];

    parser.parseString(sMapParam, function (err, urlObj) {
        for (key in urlObj) {
            var prop = urlObj[key].url;
            for (key2 in prop) {
                var testArr = prop[key2].loc.toString();
                data.url.push(testArr);
                // console.log(data.url);
            }
        }
    });
}

// to get response time each URL
function getTime() {
    // var respTime = [];
    data.ms = [];
    data.url.forEach(function (item) {
        var resUrlObj = {
            url: item,
            time: true
        };
        request.get(resUrlObj, function (err, response) {
            var tesTms = response.elapsedTime;

            data.ms.push(tesTms);
            // console.log('Request time in ms', response.elapsedTime);
        });
    });
}

//to get sitemap.xml from user URL
function generatorSitemap(url_time) {

    var generator = new SitemapGenerator(url_time);

    generator.on('fetch', function (status, url) {
        console.log(url);
    });

    generator.on('done', function (sitemap) {
        console.log("DONE!\nPlease press button TestResult for out of the test data...");
        getTime(parseUrl(sitemap));
    });

    // start the crawler
    generator.start();
}

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Test Task' });
});

router.post('/response-time', function (req, res, next) {
    var url_time = req.body.url;

    generatorSitemap(url_time);
    res.render('index');
});

//test result route button
router.get('/test-result', function (req, res, next) {
    res.render('index', data);
});

//to JsonData
router.get('/get-data', function (req, res, next) {

    try {
        var objData = [];

        for (var i = 0; i < data.url.length; i++) {
            // obj[ labels[i] ] = data[i];
            var url = data.url[i];
            var ms = data.ms[i];
            objData.push({ url: url, ms: ms });
        }
    } catch (err) {
        console.log("Enter your URL on /localhost:8000/");
    }

    res.json(objData);
});

module.exports = router;

//# sourceMappingURL=index-compiled.js.map