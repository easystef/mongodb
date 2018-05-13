var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient
var first = process.argv[2];
var last = process.argv[3];
 
mongo.connect(url, function(err, db) {
    if(err) throw err;
    var docs = db.collection('docs');
    docs.insert({
        firstName: first,
        lastName: last
    }, function(err, data) {
        if(err) throw err;  
        console.log(JSON.stringify(data.ops[0]));
    });
    
    db.close();
      
})

