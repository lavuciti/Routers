const exports = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Cats page')
})
router.get('/small', (req, res) => {
    res.send('Small cats page')
})
router.get('/wild', (req, res) => {
    res.send('Wild cats page')
})

module.exports = router;