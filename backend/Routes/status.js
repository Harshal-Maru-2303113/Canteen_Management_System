const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/status', (req, res) => {
    const {id,status} = req.body;
    const insert_query = "UPDATE orders SET order_status = ? WHERE order_id = ?";
    cms.query(insert_query,[status,id],(err,order) => {
        if(err) return console.log(err);
        return res.json({
            order_id : id
        });
    });
});

module.exports = router;
