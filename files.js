var fs = require('fs');
var input = 'out.html';
var output = 'out.html';
var out = "";
var files = fs.readFileSync('files.txt', 'utf-8').trim().split("\n");

var fileContent = fs.readFileSync(input, 'utf-8')
out =  fileContent;

files.forEach(function (file) {
	var re = new RegExp("###### "+file.replace(".","\\.")+" ########", "g")
	out = out.replace(re, "<hr/><a name='I"+file+"'>###### "+file+" ########</a>");
})

files.map(function (file) {
  var re = new RegExp("\\b"+file.replace(".","\\.")+"\\b","g")
  out = out.replace(re, "<a class='page-ref' href='#I"+file+"'>"+file+"</a>");
});

fs.writeFileSync(output, out, 'utf8');