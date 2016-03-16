'use strict';

var fs = require('fs');

var outputFilename = 'my.json';

function createJSONFile(obj, name, cb) {
    setTimeout(cb(obj, name), 1000);
}

var myData = {
  name:'test',
  version:'1.0',
  nyam: 'nyamnyam'
}

createJSONFile(myData, 'my5.json', function(obj, name) {
  fs.writeFile(name, JSON.stringify(myData, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + name);
      }
  });
});
