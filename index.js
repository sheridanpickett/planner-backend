const express =require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();
const connectMongoDB = require('./Utils/connectMongoDB');

app.use(cors());
const db = connectMongoDB();

app.get('/', (req,res)=>{
  res.send('hello!'); 
})

app.get('/mysql', (req,res)=>{
  let query = 'SELECT * FROM TextTasks.Tasks';

  db.query(query, (err, result) => {
    res.send(result);
  });
})

app.get('/about', (req,res)=>{
  res.send('this is the about page');
})

app.listen(5000, ()=>console.log('listening on port 5000'));