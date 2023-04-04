const http = require('http');
const server = http.createServer((req, res) => {
    console.log("hello");
    res.setHeader('Content-Type', 'text/html')
    res.write('Hello world')
    res.end()
})
server.listen(3000, 'localhost', (params) => {
    console.log('serve is running on port 3000');
})