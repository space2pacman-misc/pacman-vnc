let net = require("net");
let fs = require("fs");
let express = require("express");
let app = express();
let file = fs.createWriteStream("tcp.mp4");
let server = net.createServer(socket => {
	socket.on("data", data => {
		file.write(data);
	})
})

server.listen(4444, "127.0.0.1");

// let fileChunk = fs.createReadStream("tcp.mp4");
// let headers = {
// 	"Content-Type": "video/mp4"
// }

// app.get("/stream", (req, res) => {
// 	res.writeHead(206, headers);

// 	fileChunk.pipe(res);
// })

// app.listen(7777);