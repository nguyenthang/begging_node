var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo1');

var db = mongoose.connection;

db.on('error', function(err) {throw err });

db.once('open', function callback(){
  console.log('connected');

  // define a schema

  var tankSchema = new mongoose.Schema({name: 'string', size: 'string'});
  tankSchema.methods.print = function(){
    console.log('I am', this.name, 'in', this.size);
  };

  var Tank = mongoose.model('Tank', tankSchema);

  var tony = new Tank({name: 'Thang', size: 'small'});
  tony.print();

  tony.save(function(err){
    Tank.findOne({name: 'Thang'}).exec(function(err, tank){
      tank.print();
      db.collection('tanks').drop(function(){
        db.close();
      });
    });
  });
});
