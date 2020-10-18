const server = require('./server');

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})

server.get('/', (req, res) => {
	res.send(`The server is running on port ${PORT}`)
})
