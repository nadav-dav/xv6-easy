var fs = require('fs');
var input = 'out.html';
var output = 'out.html';
var out = "";
var lout = "";
var currentLine = 1;

var lines = {
'types.h':[100,103],
'param.h':[150,160],
'memlayout.h':[200,221],
'defs.h':[250,434],
'x86.h':[450,635],
'asm.h':[650,670],
'mmu.h':[700,934],
'elf.h':[950,991],
'entry.S':[1000,1063],
'entryother.S':[1100,1199],
'main.c':[1200,1317],
'spinlock.h':[1400,1409],
'spinlock.c':[1450,1574],
'vm.c':[1600,2038],
'proc.h':[2050,2123],
'proc.c':[2150,2684],
'swtch.S':[2700,2727],
'kalloc.c':[2750,2850],
'traps.h':[2900,2936],
'vectors.pl':[2950,2995],
'trapasm.S':[3000,3034],
'trap.c':[3050,3179],
'syscall.h':[3200,3221],
'syscall.c':[3250,3387],
'sysproc.c':[3400,3496],
'buf.h':[3500,3511],
'fcntl.h':[3550,3553],
'stat.h':[3600,3610],
'fs.h':[3650,3703],
'file.h':[3750,3787],
'ide.c':[3800,3983],
'bio.c':[4000,4142],
'log.c':[4150,4346],
'fs.c':[4400,5199],
'file.c':[5200,5390],
'sysfile.c':[5400,5872],
'exec.c':[5900,5999],
'pipe.c':[6000,6121],
'string.c':[6150,6258],
'mp.h':[6300,6355],
'mp.c':[6400,6556],
'lapic.c':[6600,6772],
'ioapic.c':[6800,6883],
'picirq.c':[6900,6984],
'kbd.h':[7000,7116],
'kbd.c':[7150,7199],
'console.c':[7200,7527],
'timer.c':[7500,7581],
'uart.c':[7600,7676],
'initcode.S':[7700,7729],
'usys.S':[7750,7780],
'init.c':[7800,7836],
'sh.c':[7850,8395],
'bootasm.S':[8400,8489],
'bootmain.c':[8500,8596]
}

var fileContent = fs.readFileSync(input, 'utf-8')
out =  fileContent;
out = out.replace(/\n\/\/PAGEBREAK\!/g,"\n\n");
var contentStart = getLine(out.indexOf("class='content'"));
console.log(contentStart)
re = /###### (.*) ########/g;
while ((res = re.exec(out)) !== null) {
  var file = res[1];
  var line = lines[file];
  var start = getLine(res.index) - contentStart;

  for(; currentLine < start + 2; currentLine++){
  	lout += "\n"
  }
  for(i = line[0]; i <= line[1]; currentLine++, i++){
  	lout += "\n"+i
  }
}

function getLine(index){
	return out.substr(0, index).split("\n").length;
}

fs.writeFileSync(output, out.replace("@lines",lout), 'utf8');


