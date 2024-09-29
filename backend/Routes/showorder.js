const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/showorder', (req, res) => {
    let find_query = "SELECT * FROM orders WHERE ";
    const {id,email} = req.body;
    let search = ["Completed"];
    if(email !== "admin@iitgoa.ac.in"){
        if(id){
            find_query += "order_id = ?";
            search = [id];
        }
        else{
            find_query += "order_status != ? and user_email = ?";
            search.push(email);
        }
    }
    else{
        find_query += "order_status != ? and order_status != ?";
        search.push("Cancelled");
    }
    cms.query(find_query,search,(err,orders) => {
        if(err) return console.log(err);
        console.log(orders);
        res.json(orders);
    });
});

module.exports = router;
