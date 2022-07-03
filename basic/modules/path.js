const path = require("path");

//join - склейка участков пути,абстрация склеивающая пути в независимости от опреационной системы
//на которой запускается приложение

console.log(path.join("first", "second", "third"));

console.log(
  "Склеить участки пути",
  path.join(__dirname, "first", "second", "third") //Склеить участки пути /home/alexey/projects/node/basic/first/second/third
);

console.log("Склеить участки пути", path.join(__dirname, "..")); //Склеить участки пути /home/alexey/projects/node

//возврат абсолютного пути
console.log(
  "Получить абсолютный путь",
  path.resolve("first", "second", "third.js") //Получить абсолютный путь /home/alexey/projects/node/basic/first/second/third
);

//парсинг пути

const fullpath = path.resolve("first", "second", "third");
console.log("Парсинг пути", path.parse(fullpath));

console.log("Разделитель в OC", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
console.log("Название файла", path.basename(fullpath));
console.log("Расширение файла", path.extname(fullpath));