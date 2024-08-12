const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
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
  const value =[req.body.title,req.body.description];

db.query( 'insert into table1 (`title`,`description`) values (?)',[value], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Data inserted successfully');
    res.send('Data inserted successfully');
  }
});
});


app.delete('/user/:id', (req, res) => {
  const q='DELETE FROM table1 WHERE id = ?';
  const id = req.params.id;
  db.query(q,[id], (err, data) => {
    if (err) {
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send('Data deleted successfully');
    }
  });});

  app.put('/user/:id', (req, res) => {
    const q='UPDATE table1 SET title = ? , description = ? WHERE id = ?';
    const value =[req.body.title,req.body.description];
    db.query(q,[...value,id], (err, data) => {
      if (err) {
        res.status(500).send('Error retrieving data from database');
      } else {
        res.send('update successfully');
      }
    });});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});