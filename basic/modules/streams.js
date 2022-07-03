const fs = require("fs");
const zlib = require("zlib");

//читающий поток
/* const readStream = fs.createReadStream("./docs/text.txt"); */

//пишуший поток
/* const writeStream = fs.createWriteStream("./docs/new-text.txt") */

//chunk - порция данных
/* readStream.on("data", (chunk) => {
  console.log("--------");
  console.log(chunk);
  console.log(chunk.toString());
}); */

//добавление записывающего потока внутрь читающего.Сначала происходит чтение большого файла по кускам и каждый прочитанный кусок
//будет передаваться записывающим потокам в новый файл.
/* readStream.on("data", (chunk) => {
  writeStream.write("\n---CHUNK START---\n");
  writeStream.write(chunk);
  writeStream.write("\n---CHUNK END---\n");
}); */

//чтение получаемых данных  и прямая передача в пишуший стрим

/* readStream.pipe(writeStream); */

//получаем ошибку если переименуем файл
/* readStream.on("error", handleError).pipe(writeStream).on("error", handleError); */

const readStream = fs.createReadStream("./docs/text.txt");
const writeStream = fs.createWriteStream("./docs/last-new-text.txt");
const compressStream = zlib.createGzip();

//функция отловок ошибок при чтении или записи

const handleError = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error...");
};

//трансформирующий поток(изменение данных)
readStream
  .on("error", handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleError);