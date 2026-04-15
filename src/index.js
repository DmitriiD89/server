const http = require("http");
const fs = require("fs");
const path = require("path");
const getUsers = () => {
  const filePath = path.join(__dirname, "./data/users.json");
  return fs.readFileSync(filePath);
};
const server = http.createServer((request, response) => {
  const ip = "http://127.0.0.1:3003";
  const url = new URL(request.url, ip);
  const userName = url.searchParams.get("hello");

  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;
  } else if (request.url === `/?hello=${userName}`) {
    response.statuscode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write(`Hello, ${userName}`);
    response.end();
    return;
  } else if (request.url === "/hello") {
    response.statuscode = 400;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Enter name");
    response.end();
    return;
  } else if (request.url) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello World");
    response.end();
    return;
  } else {
    response.status = 500;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("");
    response.end();
    return;
  }
});
server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
//Ispravil
