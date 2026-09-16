const http = require("http");
const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("Welcome Home");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("About Page");
        res.end();
    }
    else{
        res.write("Page Not Found");
        res.end(`<h1>Page Not Found</h1>
            <a href="/">Go to Home Page</a>`
            );
    }
});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
