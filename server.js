console.log(__dirname);
var utils = require('./utils/utils');

var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){

  if(req.method == 'GET' && req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./public/index.html').pipe(res);
  }else {
    send404(res);
  }
}).listen(3000);
console.log('Server is running at: 3000');
