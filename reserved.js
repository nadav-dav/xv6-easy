var fs = require('fs');
var input = 'out.html';
var output = 'out.html';
var out = "";
var words = ['if','else','for','while','switch','case','break','default','return', 'static', 'extern', 'struct', 'typedef'];

var fileContent = fs.readFileSync(input, 'utf-8')
out =  fileContent;
words.map(function (word) {
  var re = new RegExp("\\b"+word+"\\b","g")
  out = out.replace(re, "<span class='reserved'>"+word+"</span>");
});

out = out.replace(/\#include/g, "<span class='hash'>#include</span>")
out = out.replace(/\#define/g, "<span class='hash'>#define</span>")

fs.writeFileSync(output, out, 'utf8');