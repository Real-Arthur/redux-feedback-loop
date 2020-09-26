const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST new feedback
router.post('/', (req, res) => {
        let newFeedback = req.body
        console.log('req.body', newFeedback);

        let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
        pool.query(queryString, [newFeedback.feelings, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(201)
        })
        .catch(error => {
            console.log('Error adding feedback', error);
            res.sendStatus(500)
        });
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