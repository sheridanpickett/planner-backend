const MongoClient = require('mongodb').MongoClient,
assert = require('assert');


const connectMongoDB = () => {
  const url = 'mongodb://localhost:27017/myproject';
  
  MongoClient.connect(url, (err, db)=>{
    if(err) {
      console.log(err);
    } else {
      console.log('connected to server');
    }
  
    db.close();
  })
}

module.exports = connectMongoDB;