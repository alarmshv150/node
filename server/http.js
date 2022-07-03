const http = require("http");

//создание сервера
//req и res - объеты запроса и ответа.req хранит информацию которую можно использвать в сервере.res - формирующийся объект для отправки в браузер.
const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url); // /
  console.log(req.method); // GET

  //response header,content type of response
  res.setHeader("Content-Type", "application/json");

  /*   res.write('<head><link rel="stylesheet" href="#"></head>');

  res.write("<h1>hello world!</h1>");
  res.write("<p>My name is Oleksii</p>"); */

  //return json

  const data = JSON.stringify([
    { name: "Tom", age: 35 },
    { name: "Arthur", age: 40 },
  ]);

  //final of response
  res.end(data);
});

const PORT = 3000;

//порт для прослушки сервером
server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
