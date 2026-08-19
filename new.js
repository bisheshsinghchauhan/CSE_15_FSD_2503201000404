// const os = require("os");
// console.log("Free Memory:", os.freemem());
// console.log("Total Memory:", os.totalmem());
// console.log("CPU Architecture:", os.arch());
// console.log("CPU Info:", os.cpus());
// console.log("OS Platform:", os.platform());
// console.log("OS Release:", os.release());
// console.log("OS Type:", os.type());
// console.log("OS Uptime:", os.uptime());
// console.log("Home Directory:", os.homedir());
// console.log("Hostname:", os.hostname());
// console.log("CPU Info:", os.cpus());

const fs = require("fs");
fs.readFile("xyz.js", "utf8", (err, data) => {
    console.log(err,data);
    console.log("File Content:", data);
});
console.log("File Reading finished");

fs.writeFileSync("data.txt" , "hello student" , (err) => {
    
    });

fs.appendFile("data.txt", "console.log('Hello World!');", (err) => {
    if (err) throw err;
    console.log("Data appended to file!");
});

fs.writeFile("data.txt", "console.log('Hello World!');", (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});

fs.unlink("data.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully!");
});


// fs.unlinkSync("xyz.js");
// console.log("file delelted");