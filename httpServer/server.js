const http = require('http');

const server = http.createServer((request, response) => {});

server.listen(9090, err => {
  console.log('starting server');
  if (err) console.log('error', err);
  else console.log('server is listening on port 9090');
});
