// Using Node.js built-in http module,create an http server that runs on port 3000 and returns a json respons
// for each containing id:1 and name: "laptop"
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id: 1, name: "laptop" }));
});
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});