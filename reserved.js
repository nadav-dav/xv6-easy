var Promise = require('bluebird');
var words = ['if', 'else', 'for', 'while', 'switch', 'case', 'break', 'default', 'return', 'static', 'extern', 'struct', 'typedef'];

module.exports = function (input) {
  var output = input;
  return new Promise(function (resolve) {
    words.map(function (word) {
      var re = new RegExp("\\b" + word + "\\b", "g");
      output = output.replace(re, "<span class='reserved'>" + word + "</span>");
    });
    output = output.replace(/\#include/g, "<span class='hash'>#include</span>");
    output = output.replace(/\#define/g, "<span class='hash'>#define</span>");
    resolve(output);
  });
};

