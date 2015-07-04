var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var settings = require('./../settings');

module.exports = function () {
  return new Promise(function (resolve) {
    var output = '';
    var xv6 = settings.xv6_location;
    var files = settings.xv6_files;

    files.forEach(function (file) {
      var fileContent = fs.readFileSync(path.resolve(xv6, file), 'utf-8');
      output += ("\n\n\n###### " + file + " ########\n\n");
      output += (fileContent);
    });

    resolve(output);
  })
};