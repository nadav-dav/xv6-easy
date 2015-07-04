var Promise = require('bluebird');

module.exports = function (input) {
  var output = input;
  var defines = [];
  var pos = [];
  var offset = 0;
  return new Promise(function (resolve) {

    var re = /\#define ([^\;\n\s\(]+)/g;
    while ((res = re.exec(output)) !== null) {
      defines.push(res[1]);
      pos.push(res.index);
    }

    for (var i = 0; i < pos.length; i++) {
      var st = defines[i];
      var p = pos[i] + offset;
      var add = "<a name='A" + st + "'></a>";
      output = output.substr(0, p) + add + output.substr(p);
      offset += add.length;
    }

    defines.map(function (def) {
      var re = new RegExp("\\b" + def + "\\b", "g");
      output = output.replace(re, "<a class='define-ref' href='#A" + def + "'>" + def + "</a>");
    });

    resolve(output);
  });
};
