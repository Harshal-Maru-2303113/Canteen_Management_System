const mysql = require('mysql2')
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors()); // To allow CORS for all origins
app.use(express.json()); // To parse JSON requests

const cms = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harshal@2005",
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
    cms.query(`SELECT * FROM User where email = ? and password = ?`,values, (error, results) => {
        if (error)  console.log(error);
        else console.log(results);
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
    cms.query(`Insert into user(email,name,password) values(?,?,?)`,values,(error, results) => {
        if (error)  console.log(error);
        else console.log(results);
      });
}
    
);



  

  app.listen(5000,()=>{
    console.log("Backend started")
  })