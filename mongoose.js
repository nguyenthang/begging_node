var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo1');

var db = mongoose.connection;

db.on('error', function(err){throw err});
db.once('open', function callback(){
  console.log('connected');

  var tankSchema = new mongoose.Schema({name: 'string', size: 'string'});
  tankSchema.methods.print= function(){
    console.log('Im', this.name, 'the', this.size);
  };

  db.close();
});
print();
