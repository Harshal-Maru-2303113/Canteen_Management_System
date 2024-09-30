const express = require('express');
const cms = require('./db');

const router = express.Router();

router.post('/available', (req, res) => {
    const change_query = "UPDATE ?? SET item_status = ? WHERE item_name = ?";
    const {category, name, status} = req.body;
    let category_name = category.toLowerCase();
    let value = status ? 1 : 0;

    cms.query(change_query, [category_name, value, name], (err, item) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Database query error' });
        }
        console.log(item);
        return res.json(item);
    });
});

module.exports = router;
