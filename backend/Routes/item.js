const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/item', (req, res) => {
    const insert_query = `INSERT INTO ${req.body.category}(item_name,item_price) VALUES(?,?)`;
    cms.query(insert_query,[req.body.name,req.body.price],(err,item) => {
        if(err) return console.log(err);
        return res.json(item);
    });
});

module.exports = router;
