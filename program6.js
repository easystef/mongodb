var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
 
mongo.connect(url, function(err, db) {
    if(err) throw err;
    var p = db.collection('parrots');
    p.count({
        age: {$gt: 3}
    },  function(err, count) {
        if(err) throw err; 
        console.log(count);
        db.close();
    });
      
})
