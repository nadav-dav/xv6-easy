var fs = require('fs');
var path = require('path');
var settings = require('./settings');

settings.xv6_location = path.resolve(__dirname, '../xv6-rev7/');
settings.xv6_files = ['types.h', 'param.h', 'memlayout.h', 'defs.h', 'x86.h', 'asm.h', 'mmu.h', 'elf.h', 'entry.S', 'entryother.S', 'main.c', 'spinlock.h', 'spinlock.c', 'vm.c', 'proc.h', 'proc.c', 'swtch.S', 'kalloc.c', 'traps.h', 'vectors.pl', 'trapasm.S', 'trap.c', 'syscall.h', 'syscall.c', 'sysproc.c', 'buf.h', 'fcntl.h', 'stat.h', 'fs.h', 'file.h', 'ide.c', 'bio.c', 'log.c', 'fs.c', 'file.c', 'sysfile.c', 'exec.c', 'pipe.c', 'string.c', 'mp.h', 'mp.c', 'lapic.c', 'ioapic.c', 'picirq.c', 'kbd.h', 'kbd.c', 'console.c', 'timer.c', 'uart.c', 'initcode.S', 'usys.S', 'init.c', 'sh.c', 'bootasm.S', 'bootmain.c'];
settings.template = fs.readFileSync('./template.html','utf8');

require('./concat')()
  .then(require('./html'))
  .then(require('./files'))
  .then(require('./defines'))
  .then(require('./functions'))
  .then(require('./structs'))
  .then(require('./reserved'))
  .then(require('./comments'))
  .then(function (output){
    console.log(output);
    fs.writeFileSync('xv6.html', output, 'utf8');
  });