//Модуль events - создание,генерирование,подписка на событие.
const Emitter = require("events");
const emitter = new Emitter();
/* пользовательское событие(on)
1 аргумент - название
2 аргумент - колбек,отрабатывающий при генерации события.Принимет неограниченное к-во аргументов. */
emitter.on("message", (data, second) => {
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
});
//генерация события(emit)
const MESSAGE = process.env.message || "234";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "Вы не указали сообщение");
}

//output-Вы прислали сообщение 234 / Второй аргумент 123

//const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "Вы не указали сообщение");
}

//output-Вы прислали сообщение Вы не указали сообщение / Второй аргумент undefined

/* Использование - создание http серверов,обмен сообщениями,генерация события на определенное действие,вебсокеты,кластеризация.
Практически любой модуль node js использует в себе концепцию событийно-ориентированной модели
генерация события один раз(once) */
emitter.once("message", (data, second) => {
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
});
//события можно генерировать бесконечное к-во раз
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
//на одно и тоже название события можно вешать несколько разных колбеков
const callback = (data, second) => {
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
};
emitter.once("message", callback);
//удаление конкретного слушателя(removeListener)
emitter.removeListener("message", callback);
//удаление всех слушателей(removeAllListeners)
emitter.removeAllListeners();

//примеры
emitter.on("event", (arg) => {
  const { id, text } = arg;
  console.log(id, text);
});

emitter.emit("event", { id: 1, text: "Event test text" });

//логирование пользователя
const Emitter = require("events");

class Logger extends Emitter {
  log = (msg) => {
    console.log(msg);
    this.emit("event", { id: 1, text: "Event test text" });
  };
}

const logger = new Logger();

logger.on("event", (arg) => {
  const { id, text } = arg;
  console.log(id, text);
});

logger.log("User Logger!");
