var fs = require('fs');
var output = 'out.html';
var input = 'out.html';
var out = "";
var defines = [];
var pos = [];
var offset = 0;

var fileContent = fs.readFileSync(input, 'utf-8')

var re = /\#define ([^\;\n\s\(]+)/g;
while ((res = re.exec(fileContent)) !== null) {
  defines.push(res[1]);
  pos.push(res.index);
}

out = fileContent;


for(var i=0; i< pos.length; i++){
  var st = defines[i];
  var p = pos[i] + offset;
  var add = "<a name='A"+st+"'></a>"
  out = out.substr(0,p) + add + out.substr(p);
  offset += add.length;
}


defines.map(function (def) {
  var re = new RegExp("\\b"+def+"\\b","g")
  out = out.replace(re, "<a class='define-ref' href='#A"+def+"'>"+def+"</a>");
});



fs.writeFileSync(output, out, 'utf8');