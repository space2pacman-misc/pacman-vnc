let net = require("net");
let fs = require("fs");
let cors = require("cors");
let express = require("express");
let app = express();

app.use(cors());

let file = fs.createWriteStream("tcp.mp4");
let server = net.createServer(socket => {
	socket.on("data", data => {
		file.write(data);
		//console.log(data)
		console.log(fs.statSync("tcp.mp4").size)
	})
})

server.listen(4444, "127.0.0.1");


app.get("/stream", (req, res) => {
	let headers = {
		"Content-Length": fs.statSync("tcp.mp4").size,
		"Content-Type": "video/mp4"
	}
	
	res.writeHead(200, headers);

	fs.createReadStream("tcp.mp4").pipe(res);
})

app.listen(7777);
