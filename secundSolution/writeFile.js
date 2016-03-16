'use strict';

var fs = require('fs');

var outputFilename = 'my.json';

function CreateApp(fs) {
  this.fs = fs
}

CreateApp.prototype.createJSONFile = function(obj, name, cb) {
    setTimeout(cb(obj, name), 1000);
}

module.exports = CreateApp;
