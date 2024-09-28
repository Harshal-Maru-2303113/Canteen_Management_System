const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/pastorder', (req, res) => {
  let constrain = "";
  let resolve = "";
  if (req.body.getemail !== "admin@iitgoa.ac.in") {
    constrain = " WHERE user_email = ?";
    resolve = req.body.getemail;
  }
  const find_query = `SELECT * FROM orders${constrain}`;
  cms.query(find_query, resolve, (err, orders) => {
    if (err) return console.log(err);
    res.json(orders);
  });
});

module.exports = router;
