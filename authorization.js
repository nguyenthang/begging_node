

function auth(req, res, next){

  function send401(){
    res.writeHead(401,{'WWW-Authenticate': 'Basic'});
    res.end();
  }

  var athenHeader = req.headers.authorization;
  if(!athenHeader){
    send401();
    return;
  }
  var auth = new Buffer(athenHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  if(user == 't' && pass == 't'){
    next();
  }else {
    send401();
  }
};


var connect = require('connect');
connect()
.use(auth)
    .use(function (req, res) { res.end('Authorized!'); })
    .listen(3000);
