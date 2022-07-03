const fs = require("fs");

//получение доступа к файлу и чтение введенного текста

//асинхронный вариант
fs.readFile("./test.txt", (error, data) => {
  console.log(data); //<Buffer 48 65 6c 6c 6f 21 0a 4d 79 20 6e 61 6d 65 20 69 73 20 4f 6c 65 6b 73 69 69>
  console.log(data.toString()); //Hello! My name is Oleksii!
});

//указываем кодировку
fs.readFile("./test.txt", "utf-8", (error, data) => {
  console.log(data); //Hello! My name is Oleksii!
});

console.log("test"); //отработает быстрее

//запись

fs.readFile("./test.txt", "utf-8", (error, data) => {
  //создание копии
  fs.writeFile("./test2.txt", data, () => {});
  //добавление нового текста
  fs.writeFile("./test3.txt", `${data} New text!`, () => {});
});

//добавление в несуществующую папку

/* fs.readFile("./test.txt", "utf-8", (error, data) => {
  fs.writeFile(
    ".files/test4.txt",
    `${data} New text in new folder!`,
    (error) => {
      error ? console.log(error) : null;
    }
  );
}); */

//создание папки
/* fs.mkdir('./files',()=>{

}) */

fs.readFile("./test.txt", "utf-8", (error, data) => {
  fs.mkdir("./files", () => {
    fs.writeFile(
      "./files/test4.txt",
      `${data} New text in new folder!`,
      (error) => {
        error ? console.log(error) : null;
      }
    );
  });
});

//синхронное выполнение

/* fs.readFile("./test.txt", "utf-8", (error, data) => {
  fs.mkdirSync("./files", () => {
    fs.writeFileSync(
      "./files/test4.txt",
      `${data} New text in new folder!`,
      (error) => {
        error ? console.log(error) : null;
      }
    );
  });
}); */

//удаление файлов и папок

setTimeout(() => {
  if (fs.existsSync("./files/test4.txt")) {
    fs.unlink("./files/test4.txt", () => {});
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync("./files")) {
    fs.rmdir("./files", () => {});
  }
}, 6000);