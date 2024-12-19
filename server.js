const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
  res.end('Hello, Kubernetes! From Walidur Rahman');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on local IP at http://127.0.0.1:${port}`);
});
