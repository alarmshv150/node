const os = require("os");

console.log(os.platform(), os.release()); //linux 5.4.0-74-generic
console.log(os.arch()); //x64
console.log(os.cpus().length); //к-во ядер процессора