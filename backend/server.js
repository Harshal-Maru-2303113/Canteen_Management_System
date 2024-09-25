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
  cms.query(`SELECT * FROM users where email = ?`, values[0], (error, results) => {
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
  cms.query(`Insert into users(user_email,user_name,user_password) values(?,?,?)`, values, (error, results) => {
    if (error){
      return res.json({ message: 'Email is already registered' });
    }
    res.json({ message: '' });
  });
}
);

app.get('/user', (req, res) => {
  try{
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
  )}
  catch(e){
    res.json({message: 'no session'});
  }
});

app.post('/logout', (req, res) => {
  console.log(req.cookies);
  res.cookie('jwt', '', {
    httpOnly: true,
    maxAge: 0
  });
  localStorage.setItem('value',0);
  res.json({ message: 'Logged out successfully' });
});


app.listen(5000, () => {
  console.log("Backend started")
});