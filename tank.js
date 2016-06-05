var mongoose = require('./mongoose');
var tankSchema = mongoose.Schema({name: 'string', size: 'string'});
tankSchema.methods.print= function(){
  console.log('Im', this.name, 'the', this.size);
};


//var Tank = mongoose.model('Tank', tankSchema);
