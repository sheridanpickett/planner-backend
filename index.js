const express =require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();

app.use(cors());

const connectDb = require('./Utils/connectDb');
const db = connectDb();


app.get('/', (req,res)=>{
  let query = 'SELECT * FROM TextTasks.Tasks';

  db.query(query, (err, result) => {
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