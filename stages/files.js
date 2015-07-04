var fs = require('fs');
var Promise = require('bluebird');
var settings = require('./../settings');

module.exports = function (input) {
  var output = input;
  var files = settings.xv6_files;
  return new Promise(function (resolve) {

    files.forEach(function (file) {
      var re = new RegExp("###### " + file.replace(".", "\\.") + " ########", "g");
      output = output.replace(re, "<hr/><a name='I" + file + "'>###### " + file + " ########</a>");
    });

    files.map(function (file) {
      var re = new RegExp("\\b" + file.replace(".", "\\.") + "\\b", "g");
      output = output.replace(re, "<a class='page-ref' href='#I" + file + "'>" + file + "</a>");
    });

    resolve(output);
  });
};