const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/signup', (req, res) => {
  const data = [
    req.body.email,
    req.body.name,
    req.body.password
  ];
  const insert_query = "INSERT INTO users VALUES(?,?,?)";
  cms.query(insert_query, data, (err) => {
    if (err) return res.json({ message: "Email already registered" });
    return res.json({ message: "" });
  });
});

module.exports = router;
