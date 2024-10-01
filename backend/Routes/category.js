const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/category', (req, res) => {
    const insert_query = "INSERT INTO category VALUES(?)";
    const category = req.body.category;
    cms.query(insert_query,[category],(err,types) => {
        if(err) return console.log(err);
        const create_query = `CREATE TABLE ${category}(item_name varchar(100),item_price int not null,item_status boolean default 1,primary key(item_name))`;
        cms.query(create_query,(err,type) => {
            if(err) return console.log(err);
            res.json(type);
        });
    });
});

module.exports = router;
