const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Server request");

  res.setHeader("Content-Type", "text/html");

  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = "";

  //присвоение пути для каждой html страницы
  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    //redirect
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;
    case "/contacts":
      basePath = createPath("contacts");
      res.statusCode = 200;
      break;
    default: //ошибка о несуществующей странице
      basePath = createPath("error");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500; //внутренняя серверная ошибка(потеря доступа к файлу)
      res.end(data);
    } else {
      res.write(data);
      res.end();
    }
  });
});

const PORT = 3000;

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//реализация серверного роутинга - при переходе по определенному url адресу возвращать новую разметку.

//при работе с запросами и ответами всегда необходимо завершать ответ для возвращения контроля браузеру.
//Определяется какой url адрес прилетает в запросе, и в зависимости от этого возвращатся нужная страница.
