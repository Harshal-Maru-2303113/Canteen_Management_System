const mysql = require('mysql2');

const cms = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshal@2005",
  database: "cms"
});

cms.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = cms;
