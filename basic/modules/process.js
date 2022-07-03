const dotenv = require("dotenv")
dotenv.config()

console.log(process.pid); // id текущего  процесса 

//"start":"cross-env PORT=5000 NODE_ENV=production nodemon index.js",
console.log(process.env.NODE_ENV); //production
console.log(process.env.PORT); // 5000

//or with .env

console.log(process.env.NODE_ENV); //production
console.log(process.env.PORT); // 6000