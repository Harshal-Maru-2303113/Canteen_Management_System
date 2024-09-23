const mysql = require('mysql2')
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookiePaser = require('cookie-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookiePaser());

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
        const token = jwt.sign({
          id: values[0]
        }, "secret");
        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        })
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

app.get('/user', (req, res) => {
  if (req.cookies == '') {
    return res.json({ message: 'unauthenticated' });
  }
  const cookie = req.cookies['jwt'];
  const claims = jwt.verify(cookie, 'secret');
  if (!claims) {
    return res.json({ message: 'unauthenticated' });
  }
  cms.query(`SELECT * FROM User where email = ?`, values[0], (error, results) => {
    if (error) console.log(error);
    else {
      return res.send(results[0]);
    }
  }
  )
})

app.post('/logout', (req, res) => {
  res.cookie('jwt', '', {
    maxAge: 0
  })
})

app.listen(5000, () => {
  console.log("Backend started")
})