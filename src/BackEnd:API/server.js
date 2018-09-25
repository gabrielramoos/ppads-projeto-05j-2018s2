const app = require('./app');
const http = require('http');

const port = 8000

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(err) {
  console.error('Ocorreu um Erro');
}

function onListening() {
  console.log('Port Online: ', port);
}
