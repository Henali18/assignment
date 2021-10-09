const os = require("os");
console.log("\nArchitecture  : " + os.arch());
console.log("Free Memory   : " + os.freemem() / (1024 * 1024 * 1024) + " GB");
console.log("Total Memory  : " + os.totalmem() / (1024 * 1024 * 1024) + " GB");
console.log("Plaform       : " + os.platform());
console.log("Current User  : ");
console.log(os.userInfo());