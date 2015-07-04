var Promise = require('bluebird');

module.exports = function (input){
  var out = input;
  return new Promise(function (resolve) {
    out = out.replace(/(\/\/[^\n]*)\n/g,"<span class='comment'>$1</span>");
    resolve(out);
  });
};