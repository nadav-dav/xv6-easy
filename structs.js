var Promise = require('bluebird');

module.exports = function (input) {
  var output = input;
  var structs = [];

  return new Promise(function (resolve) {

    var re = /\n(struct ([a-zA-Z0-9]+)\s+\{)/g;
    while ((res = re.exec(output)) !== null) {
      var name = res[2].trim();
      structs.push(name);
      var st = res[1].trim();
      output = output.replace(st, "<a name='S" + name + "'></a>" + st)
    }

    re = /\n(struct {[^\}]*} ([a-zA-Z0-9]+);)/g;
    while ((res = re.exec(output)) !== null) {
      var name = res[2].trim();
      structs.push(name);
      var st = res[1].trim();
      output = output.replace(st, "<a name='S" + name + "'></a>" + st)
    }

    structs.map(function (st) {
      var re = new RegExp("\\b" + st + "\\b", "g");
      output = output.replace(re, "<a class='str-ref' href='#S" + st + "'>" + st + "</a>");
    });

    resolve(output);
  });
};