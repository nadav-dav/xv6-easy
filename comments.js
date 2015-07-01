var fs = require('fs');
var input = 'out.html';
var output = 'out.html';
var out = "";

var fileContent = fs.readFileSync(input, 'utf-8')
out =  fileContent;

out = out.replace(/(\/\/[^\n]*)\n/g,"<span class='comment'>$1</span>")

fs.writeFileSync(output, out, 'utf8');