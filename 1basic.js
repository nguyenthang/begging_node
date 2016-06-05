var connect = require('connect'),
http = require('http');
var app = connect().use(parseJson).use(function(req, res){
  if(req.body){
    res.end("JSON Parse");
  }else{
    res.end('Failed');
  }
}).listen(3000);

//http.createServer(app).listen(3000);

console.log('server is running on port 3000');

function parseJson(req, res, next){
  if(req.headers['Content-Type'] == 'application/json'){
    var readData = '';
    req.on('readable', function(){
      readData += req.read();
    });

    req.on('end', function(){
      try{
        req.body = JSON.parse(readData);
      }catch(e){}
      next();
    });
  }else {
    next();
  }
}
