const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/pastorder', (req, res) => {
  let constrain = "";
  let resolve = [];
  if (req.body.getemail !== "admin@iitgoa.ac.in") {
    constrain = "user_email = ? AND ";
    resolve.push(req.body.getemail);
  }
  resolve.push("Delivered","Cancelled")
  const find_query = `SELECT * FROM orders WHERE ${constrain}(order_status = ? OR order_status = ?) ORDER BY order_id DESC`;
  cms.query(find_query, resolve, (err, orders) => {
    if (err) return console.log(err);
    res.json(orders);
  });
});

module.exports = router;
