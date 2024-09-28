const express = require('express');
const cms = require('./db');

const router = express.Router();

router.get('/cart', (req, res) => {
  const take_query = "SELECT * FROM category";
  cms.query(take_query, (err, tables) => {
    if (err) return console.log(err);
    const menu = {};
    const total_types = tables.length;
    for (let i = 0; i < total_types; i++) {
      const item = tables[i].item_type;
      const query = `SELECT * FROM ${item}`;
      cms.query(query, (err, items) => {
        if (err) return console.log(err);
        menu[item] = items;
        if (i === total_types - 1) {
          return res.json(menu);
        }
      });
    }
  });
});

module.exports = router;
