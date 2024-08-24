const http = require('http');
const PORT = 3000;


const server = http.createServer((req, res) => {
	console.log(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
	res.write("tas pollo ortega")
	res.end();
});

server.listen(PORT)
console.log('server listening on ' + PORT);
