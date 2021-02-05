let net = require("net");
let io = require("socket.io")(8888, { cors: { origin: "*" } });

let server = net.createServer(socket => {
	socket.on("data", data => {
		console.log("---")
		io.emit("stream", data.toString("base64"));
	})
})

server.listen(4444, "127.0.0.1");

io.on("connection", socket => {
	
})