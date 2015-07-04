var Promise = require('bluebird');
var settings = require('./../settings');

module.exports = function (input) {
  return new Promise(function (resolve) {
    var templateParts = settings.template.split('$CONTENT$');
    var beginning =  templateParts[0];
    var ending =  templateParts[1];
    var output = input.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    output = beginning + output + ending;
    resolve(output);
  });
};