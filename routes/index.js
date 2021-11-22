const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home page')
})

router.use('/users', require('./users'));

router.use('/cats', require('./cats'));

module.exports = router;