//глобальные объекты

//console.log(global);

/* setTimeout(() => {
  console.log("Hello!");
},2000); */

//dirname - полный доступ к исполняемому файлу.
//filename - весь путь к файлу,включая его имя и расширение
//process - тип кофигурации,переменные окружения,версий итд
//url - url адреса получаемые из сервера

//console.log(__dirname); // /home/alexey/projects/node/basic
//console.log(__filename) // /home/alexey/projects/node/basic/index.js
//console.log(process);
//console.log(process.env); //добавляются переменные окружения DEVELOP или PRODUCTION, в зависимости от них запускаются разные варианты окружения.
//Можно установить переменную PATH с 3000 и слушать приложение на этом порту.

/* console.log(process.argv); */

//console.log(`Hello, ${process.argv[2]}`); // npm run start Oleksii -> Hello, Oleksii in terminal

const url = new URL("https://www.youtube.com/");

console.log(url);
console.log(url.hostname); //www.youtube.com
console.log(url.href);//https://www.youtube.com/
console.log(url.pathname);
console.log(url.hash);

const siteUrl = "http://localhost:8000/users?id=5123";

const newUrl = new URL(siteUrl);
console.log(newUrl);

/* 
URL {
  href: 'http://localhost:8000/users?id=5123',
  origin: 'http://localhost:8000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8000',
  hostname: 'localhost',
  port: '8000',
  pathname: '/users',
  search: '?id=5123',
  searchParams: URLSearchParams { 'id' => '5123' },
  hash: ''
}
 */