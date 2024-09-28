const express = require('express');
const jwt = require('jsonwebtoken');
const cms = require('./db');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const find_query = "SELECT user_password FROM users WHERE user_email = ?";
  cms.query(find_query, [email], (err, user) => {
    if (err) return console.log(err);
    if (user.length) {
      if (password === user[0].user_password) {
        const token = jwt.sign({ id: email }, "secret", {
          expiresIn: '1d',
          algorithm: 'HS256'
        });
        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        return res.json({ message: "" });
      }
      return res.json({ message: "Incorrect Password" });
    };
    return res.json({ message: "Email is not registered" });
  });
});

module.exports = router;
