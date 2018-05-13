var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient
var x = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    if(err) throw err;
    var p = db.collection('parrots');
    p.find({
        age: {$gt: x}
    }).toArray(function(err, documents) {
        if(err) throw err;
        console.log(documents);
    })
    
    db.close();
      
})

