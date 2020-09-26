const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/getter', (req, res) => {
    console.log('GET /feedback/getter');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

module.exports = router;