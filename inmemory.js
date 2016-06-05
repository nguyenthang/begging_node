var epxress = require('express');
var expressSession =  require('express-session');

var app = epxress().use(expressSession({
  secret: 'thang',
  resave: true, saveUninitialized: true
})).use('/home', function(req, res){
  if(req.session.views){
    req.session.views++;
  }else {
    req.session.views = 1;
  }

  res.end('Total views for you: ' + req.session.views);
}).listen(3000);
console.log('Server is running at 3000');
