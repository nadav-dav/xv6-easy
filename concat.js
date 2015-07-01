var fs = require('fs');
var files = 'files.txt';
var xv6 = '/Users/ddd/Dropbox/OS/xv6-rev7/';
var out = '';
var remaining = '';

function process(file) {
  var fileContent = fs.readFileSync(xv6+file, 'utf-8')
  out += ("\n\n\n###### "+file+" ########\n\n");
  out += (fileContent)
}

function done(){
  fs.writeFileSync('out.html', out, 'utf8')
}

var input = fs.createReadStream(files);
input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      process(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      process(remaining);
    }
    else {
      done();
    }
  });