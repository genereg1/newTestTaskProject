'use strict';

var labels = ['http://fex.net', 'http://fex2.net', 'http://fex3.net'];
var data = [44, 44, 50];

var obj = [];
for (var i = 0; i < labels.length; i++) {

    // obj[ labels[i] ] = data[i];
    var url = labels[i];
    var ms = data[i];
    obj.push({ url: url, ms: ms });
}

var asJSON = JSON.stringify(obj);

console.log(obj);

//# sourceMappingURL=test2-compiled.js.map