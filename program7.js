var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var s = process.argv[2];
 
mongo.connect(url, function(err, db) {
    if(err) throw err;
    var p = db.collection('prices');
    p.aggregate([
        {$match: {size: s}},
        {$group: {
            _id: 'avg',
        avg: {
            $avg: '$price'
        }
        }}
    ]).toArray(function(err, results) {
        if(err) throw err; 
        console.log(results[0].avg.toFixed(2));
        db.close();
    });
      
})
