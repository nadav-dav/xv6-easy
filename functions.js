var fs = require('fs');
var output = 'out.html';
var input = 'out.html';
var out = "";
var fns = [];

var fileContent = fs.readFileSync(input, 'utf-8')

var re = /\n([a-zA-Z0-9\_]+)\(/g;
while ((res = re.exec(fileContent)) !== null) {
  fns.push(res[1]);
}

re = /\n([a-zA-Z0-9\_]+):/g;
while ((res = re.exec(fileContent)) !== null) {
  fns.push(res[1]);
}

out = fileContent;

fns.map(function (fn) {
  var re = new RegExp("\\n"+fn+"\\(","g")
  out = out.replace(re, "\n<a name='F"+fn+"'>"+fn+"</a>(");
});
fns.map(function (fn) {
  var re = new RegExp("\\n"+fn+":","g")
  out = out.replace(re, "\n<a name='F"+fn+"'>"+fn+"</a>:");
});

fns.map(function (fn) {
  var re = new RegExp("\\b"+fn+"\\b","g")
  out = out.replace(re, "<a class='func-ref' href='#F"+fn+"'>"+fn+"</a>");
});



fs.writeFileSync(output, out, 'utf8');