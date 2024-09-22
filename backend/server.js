const mysql = require('mysql2')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const cms = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kartik",
  database: "cms"
})

cms.connect((err) => {
  if (err) {
    return;
  }
  console.log('Connected');
});

app.post('/login', (req, res) => {
  const values = [
    req.body.email,
    req.body.password
  ]
  console.log(`Received: ${values[0]}, ${values[1]}`);
  cms.query(`SELECT * FROM User where email = ?`, values[0], (error, results) => {
    if (error) console.log(error);
    else {
      if (results == "") {
        res.json({ message: "Email not registered" });
      }
      else if (results[0].password == values[1]) {
        res.json({ message: 'Login successful' });
      }
      else {
        res.json({ message: "Incorrect password" });
      }
    };
  });
}
);

app.post('/signup', (req, res) => {
  const values = [
    req.body.email,
    req.body.name,
    req.body.password
  ]
  console.log(`Received: ${values[0]}, ${values[1]}`);
  cms.query(`Insert into user(email,name,password) values(?,?,?)`, values, (error, results) => {
    if (error) console.log(error);
    else console.log(results);
  });
}

);

app.listen(5000, () => {
  console.log("Backend started")
})