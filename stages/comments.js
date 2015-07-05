var Promise = require('bluebird');

module.exports = function (input){
  var out = input;
  return new Promise(function (resolve) {
    out = out.replace(/(http\:\/\/)/ig,"_HTTPTOKEN_");
    out = out.replace(/(https\:\/\/)/ig,"_HTTPSTOKEN_");
    out = out.replace(/(\/\/[^\n]*)\n/g,"<span class='comment'>$1</span>");
    out = out.replace(/(_HTTPTOKEN_)/g,"http://");
    out = out.replace(/(_HTTPSTOKEN_)/g,"https://");
    resolve(out);
  });
};