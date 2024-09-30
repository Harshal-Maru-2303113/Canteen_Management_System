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
            // Group the OR conditions for correct logic
            find_query += "user_email = ? AND (order_status != ? AND order_status != ?)";
            search.push(email, "Completed", "Cancelled");
        }
    } else {
        // Admin can view all except Completed and Cancelled
        find_query += "(order_status != ? AND order_status != ?)";
        search.push("Completed", "Cancelled");
    }

    console.log(search, find_query);
    cms.query(find_query, search, (err, orders) => {
        if (err) return console.log(err);
        console.log(orders);
        res.json(orders);
    });
});

module.exports = router;
