const mysql = require('mysql2')
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

const cms = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kartik",
  database: "cms"
});

cms.connect((err) => {
  if (err) {
    return;
  }
  console.log('Connected');
});

app.listen(5000, () => {
  console.log("Backend started");
});

app.post('/login', (req,res) => {
  const { email, password } = req.body;
  const find_query = "SELECT user_password FROM users WHERE user_email = ?";
  cms.query(find_query,[email],(err,user) => {
    if(err) return console.log(err);
    if(user.length){
      if(password === user[0].user_password){
        const token = jwt.sign({id : email},"secret",{
          expiresIn: '1d',
          algorithm: 'HS256'
        });
        res.cookie('jwt',token,{
          httpOnly: true,
          maxAge: 24*60*60*1000
        });
        return res.json({message : ""});
      }
      return res.json({message : "Incorrect Password"});
    };
    return res.json({message : "Email is not registered"});
  });
});

app.post('/signup',(req,res) => {
  const data = [req.body.email,
    req.body.name,
    req.body.password
  ]
  const insert_query = "INSERT INTO users VALUES(?,?,?)";
  cms.query(insert_query,data,(err) => {
    if(err) return res.json({message : "Email already registered"});
    return res.json({message : ""});
  });
});

app.get('/user', (req, res) => {
  if(Object.keys(req.cookies).length !== 0){
    const token = req.cookies['jwt'];
    let value;
    value = jwt.verify(token, "secret");
    if(value){
      const find_query = "SELECT user_email FROM users WHERE user_email = ?";
      cms.query(find_query, [value.id], (err, user) => {
        if(err) console.log(err);
        return res.json({ email: user[0].user_email });
      });
    } 
    else{
      return res.json({ email: "" });
    }
  }
  else{
    return res.json({email: ""});
  }
});

app.get('/logout',(req,res) => {
  res.cookie('jwt','',{
    httpOnly: true,
    maxAge: 0
  });
  return res.json({message : "Logged out sucessfully"});
});

app.get('/cart',(req,res) => {
  var take_query = "SELECT * FROM category";
  cms.query(take_query,(err,tables) => {
    var menu = {
    };
    const total_types = tables.length;
    for(let i = 0; i < total_types; i++){
      const item = tables[i].item_type;
      take_query = `SELECT * FROM ${item}`;
      cms.query(take_query,(err,items) => {
        menu[`${item}`] = items;
        if (i === total_types-1) {
          return res.json(menu);
        }
      });
    }
  });
});