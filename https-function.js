require ht

const server = http.createServer((request, response) => {
  const url = 'https://broken-links-api.herokuapp.com/'
  url = request;

  response.setHeader('Content-type', 'application/json');
  if (url === '/') {
    response.statusCode = 200;
    response.write(JSON.stringify({ message: 'You are on the homepage' }));
    response.end();
  }
  else if (url === '/apples.html') {
      if (err) return err;
    response.statusCode = 200;
    response.write(JSON.stringify({ message: 'Link is working' }));
    response.end();
    } 
  else if (url === '/onions.html') {
    response.statusCode = 404;
    response.write(JSON.stringify({ message: 'Link is broken }));
    response.end();
  }
})
