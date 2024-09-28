const express = require('express');
const jwt = require('jsonwebtoken');
const cms = require('./db');

const router = express.Router();

router.get('/user', (req, res) => {
  if (Object.keys(req.cookies).length !== 0) {
    const token = req.cookies['jwt'];
    let value;
    try {
      value = jwt.verify(token, "secret");
    } catch (err) {
      return res.json({ email: "" });
    }
    if (value) {
      const find_query = "SELECT user_email, user_name FROM users WHERE user_email = ?";
      cms.query(find_query, [value.id], (err, user) => {
        if (err) return console.log(err);
        return res.json({ 
          email: user[0].user_email,
          name : user[0].user_name
        });
        console.log(user[0].user_name)
      });
    }
  } else {
    return res.json({ email: "" });
  }
});

module.exports = router;
