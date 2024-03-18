const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
    function getHandler(statusCode,fileLocation){
        fs.readFile(fileLocation, "utf-8", (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
    }
  if (req.url === "/") {
  getHandler(200,"index.html")
  }
  else if(req.url === "/about"){
    getHandler(200,"about.html")

  }
  else if(req.url === "/contact"){
    getHandler(200,"contact.html")

  }
  else{
    getHandler(404,"404.html")
  }
});

server.listen(PORT, hostName, () => {
  console.log(`successfull http://${hostName}:${PORT}`);
});
