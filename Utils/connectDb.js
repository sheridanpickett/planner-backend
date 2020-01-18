const mysql = require('mysql');

const connectDb = () => {
  const db = mysql.createConnection ({
    host: 'database-1.ctxzh1uftyto.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Letmein465',
    database: 'TextTasks'
  });
  
  db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
  });
  return db;
}

module.exports = connectDb;