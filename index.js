var fs = require('fs')
var spawn = require('child_process').spawnSync

var files = ['concat', 'html','files', 'defines','functions','structs', 'reserved','comments']

files.forEach(function (f) {
	spawn('node',[__dirname+"/"+f], {stdio: 'inherit'});
})

var fileContent = fs.readFileSync('out.html', 'utf-8')
fs.writeFileSync('xv6.html', fileContent, 'utf8');