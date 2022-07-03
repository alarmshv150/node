const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server request");
  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello world!</p>");

  res.end();
});

const PORT = 3000;

server.listen(PORT,"localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});



