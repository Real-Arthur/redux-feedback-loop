
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST new feedback
router.post('/inputs', (req, res) => {
        console.log(req.body)
});
/*
// DELETE an order
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "orders" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/order', error);
        res.sendStatus(500);
    })
});
*/

module.exports = router; 