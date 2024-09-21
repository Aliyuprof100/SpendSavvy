const express = require('express');
const router = express.Router();

// Get all expenses
router.get('/', (req, res) => {
    res.send('Get all expenses');
});

// Create new expense
router.post('/', (req, res) => {
    res.send('Create a new expense');
});

module.exports = router;