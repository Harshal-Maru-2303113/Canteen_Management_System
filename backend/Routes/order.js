const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/order', (req, res) => {
    const insert_query = "INSERT INTO orders(user_email,ordered_items,order_price,order_time) VALUES(?,?,?,?)";
    cms.query(insert_query,Object.values(req.body),(err,order) => {
        if(err) return console.log(err);
        res.json({
            id : order.insertId
        });
    });
});

module.exports = router;
