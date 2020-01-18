const express =require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const connectDb = require('./Utils/connectDb');
const db = connectDb();


app.get('/', (req,res)=>{
  let query = 'SELECT * FROM TextTasks.Tasks';

  db.query(query, (err, result) => {
    if (err) {
      res.redirect('/');
    }
    res.send(result);
  });
})

app.get('/test', (req,res)=>{
  res.send('test successful'); 
})

app.get('/about', (req,res)=>{
  res.send('this is the about page');
})

app.listen(5000, ()=>console.log('listening on port 5000'));