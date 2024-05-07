var express = require("express");
const http = require("http");
const { Server } = require("socket.io");
var app = express();
require("./dbconnection");
var port = process.env.port || 3042;
let routes = require("./routers/router");
const { Socket } = require("dgram");
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

//io request
io.on("connection", (socket) => {
  let randomNumber = Math.random();
  console.log(randomNumber);
  socket.on("message from the frontend:", (message) => {
    console.log("message from the frontend:", message);
  });
});

server.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});
