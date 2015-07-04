var Promise = require('bluebird');

module.exports = function (input) {
  var output = input;
  var fns = [];
  return new Promise(function (resolve) {

    var re = /\n([a-zA-Z0-9\_]+)\(/g;
    while ((res = re.exec(output)) !== null) {
      fns.push(res[1]);
    }

    re = /\n([a-zA-Z0-9\_]+):/g;
    while ((res = re.exec(output)) !== null) {
      fns.push(res[1]);
    }


    fns.map(function (fn) {
      var re = new RegExp("\\n" + fn + "\\(", "g");
      output = output.replace(re, "\n<a name='F" + fn + "'>" + fn + "</a>(");
    });
    fns.map(function (fn) {
      var re = new RegExp("\\n" + fn + ":", "g");
      output = output.replace(re, "\n<a name='F" + fn + "'>" + fn + "</a>:");
    });

    fns.map(function (fn) {
      var re = new RegExp("\\b" + fn + "\\b", "g");
      output = output.replace(re, "<a class='func-ref' href='#F" + fn + "'>" + fn + "</a>");
    });
    resolve(output);
  });
};