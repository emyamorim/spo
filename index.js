var app = require('./config/express')();
var http = require('http');
var server = http.createServer(app);
server.listen(3000, function() {
  console.log('servidor rodando ' + 3000);
});
