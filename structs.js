var fs = require('fs');
var output = 'out.html';
var input = 'out.html';
var out = "";
var i;
var structs = [];
var pos = [];
var offset = 0;

var fileContent = fs.readFileSync(input, 'utf-8')
out = fileContent;

var re = /\n(struct ([a-zA-Z0-9]+)\s+\{)/g;
while ((res = re.exec(fileContent)) !== null) {
  var name = res[2].trim();
  structs.push(name);
  var st = res[1].trim();
  out = out.replace(st, "<a name='S"+name+"'></a>"+st)
}

re = /\n(struct {[^\}]*} ([a-zA-Z0-9]+);)/g;
while ((res = re.exec(fileContent)) !== null) {
  var name = res[2].trim();
  structs.push(name);
  var st = res[1].trim();
  out = out.replace(st, "<a name='S"+name+"'></a>"+st)
}

structs.map(function (st) {
  var re = new RegExp("\\b"+st+"\\b","g")
  out = out.replace(re, "<a class='str-ref' href='#S"+st+"'>"+st+"</a>");
});

fs.writeFileSync(output, out, 'utf8');