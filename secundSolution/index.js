'use strict';

var CreateApp = require('./writeFile');
var fs = require('fs');
var createApp = new CreateApp(fs);

var myData = {
  name:'test',
  version:'1.0',
  nyam: 'nyamnyam'
}

createApp.createJSONFile(myData, 'my5.json', function(obj, name) {
  fs.writeFile(name, JSON.stringify(myData, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + name);
      }
  });
});

