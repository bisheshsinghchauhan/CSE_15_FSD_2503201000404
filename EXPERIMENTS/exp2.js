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
