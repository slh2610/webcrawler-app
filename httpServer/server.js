const http = require('http');
const { testFunction, getResponse } = require('./controllers');

const server = http.createServer({}, (req, res) => {
  // testFunction(req, res);
  getResponse();
});

server.listen(9090, err => {
  console.log('starting server');
  if (err) console.log('error', err);
  else console.log('server is listening on port 9090');
});
