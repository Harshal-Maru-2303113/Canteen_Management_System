const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/showorder', (req, res) => {
    let find_query = "SELECT * FROM orders WHERE ";
    const { id, email } = req.body;
    let search = [];
    if (email !== "admin@iitgoa.ac.in") {
        if (id) {
            find_query += "order_id = ?";
            search = [id];
        } else {
            find_query += "user_email = ? AND (order_status != ? AND order_status != ?)";
            search.push(email, "Delivered", "Cancelled");
        }
    } else {
        find_query += "(order_status != ? AND order_status != ?)";
        search.push("Delivered", "Cancelled");
    }
    cms.query(find_query, search, (err, orders) => {
        if (err) return console.log(err);
        res.json(orders);
    });
});

module.exports = router;
