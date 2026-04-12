const http = require("http");
const server = http.createServer((request, response) => {
  const ip = "http://127.0.0.1";
  const url = new URL(request.url, ip);
  const userName = url.searchParams.get("hello");
  if (userName) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write(`Hello ${userName}`);
    response.end();
  } else {
    response.status = 400;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Enter a name");
    response.end();
  }
  response.status = 200;
  response.statusMessage = "OK";
  response.header = "Content-Type: text/plain";
  response.write("Hello World");
  response.end();
});
server.listen(3000, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3000");
});
