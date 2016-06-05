var MongoClient = require('mongodb').MongoClient;

var demoPerson = {name: 'Thang', lastName: 'Nguyen'};

var findKey = {name: 'Thang'};

MongoClient.connect('mongodb://localhost:27017/demo', function(err, db){
  if(err) throw err;
  console.log('Successfully connected');

  var collection = db.collection('people');
  collection.insert(demoPerson, function(err, docs){
    console.log('Inserted', docs[1]);
    console.log('ID Person: ', demoPerson._id);

    collection.find(findKey).toArray(function(err, results){
      console.log('Found results', results);
    });

    demoPerson.lastName = "Thang 11";
    collection.save(demoPerson, function(err){
        console.log("updated");
        collection.find({firstName: 'Thang 11'}).toArray(function(err, results){
          console.log(results);
          db.close();
          //collection.drop(function(){db.close()});
        });
    });

    /*collection.remove(findKey, function(err, results){
      console.log('Deleted person');
      db.close();
    })*/
  });
});
