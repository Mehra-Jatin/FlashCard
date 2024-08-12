const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

 const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test',
});


app.get('/', (req, res) => {
  res.send('Hello World!');
}); 


app.get('/user', (req, res) => {
  db.query('SELECT * FROM table1', (err, data) => {
    if (err) {
      res.status(500).send('Error retrieving data from database');
    } else {    
      res.json(data);
    }
  });
});


app.post('/user', (req, res) => {
  const value =[req.body.title,req.body.description,req.body.cover];

db.query( 'insert into table1 (`title`,`description`,`cover`) values (?)',[value], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Data inserted successfully');
    res.send('Data inserted successfully');
  }
});
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});