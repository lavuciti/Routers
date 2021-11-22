const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users page')
})
router.get('/admin', (req, res) => {
    res.send('Admin page')
})
router.get('/customers', (req, res) => {
    res.send('Customers page')
})

module.exports = router;