const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/logout', (req, res) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      maxAge: 0
    });
    return res.json({ message: "Logged out successfully" });
  });
  
  module.exports = router;